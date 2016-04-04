<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Endpoint extends MY_Controller {

  private $_shop = '';
  private $_inputInfo = array();
  private $_message = '';
  private $_shopifydelay = 0.9;
  
  private $_log_file = false;
  private $_log_message = true;
      
  public function __construct() {
    parent::__construct();
    
    ini_set( 'max_execution_time', '40000' );
    
    // Shopify Delay
    $this->_shopifydelay = $this->_shopifydelay * 1000000;
    
    // Load Model    
    $this->load->model( 'Log_model' );
    
    // Define a header
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header('Content-Type: application/json');
    
    // Get the shop from the HTTP Header or private shop  
    $this->_shop = isset( $_SERVER['HTTP_X_SHOPIFY_SHOP_DOMAIN'] ) ? $_SERVER['HTTP_X_SHOPIFY_SHOP_DOMAIN'] : $this->config->item('PRIVATE_SHOP');

    // Get the Input Stream
    $this->_inputInfo = json_decode( file_get_contents('php://input') );

    // Log the request 
    if( $this->_log_file )   
    {
      $this->Log_model->add( 'Webhook', $this->_shop, $_SERVER['REQUEST_URI'] . json_encode( $this->_inputInfo ), '' );
    }
    
  }
  
  public function __destruct()
  {
  }
  
  // Load shopify model  
  private function _loadShopify()
  {
    // Define the model
    $this->load->model( 'Shopify_model' );
    $this->Shopify_model->setStore( $this->_shop, $this->_arrStoreList[$this->_shop]->app_id, $this->_arrStoreList[$this->_shop]->app_secret );
  }      
  
  // Get the Shop information
  private function _getShopInfo()
  {
    // Load the shopify model
    $this->_loadShopify();

    return $this->Shopify_model->accessAPI( 'shop.json' );
  }

  
  public function index(){
  }
  
  /** 
  * Checkout popup
  * 
  */
  public function order_create( $method = 'Order Created' )
  {
    // Load Model
    $this->load->model( 'Process_model' );
    
    // Log the system
    $this->Log_model->add( 'Webhook', $method, trim( $this->_inputInfo->name, '#'), $this->_shop );        

    // Access the Process
    $this->Process_model->order_create( $this->_inputInfo, $this->_arrStoreList[ $this->_shop ], $method );    
      
    header( "HTTP/1.1 200 OK" );
  }
  
  public function order_paid()
  {
    $this->order_create( 'Order Paid' );
  }
  
  public function order_update()
  {
    usleep( 10000000 );
    
    // Skip blank update within 10 seconds
    if( $this->_inputInfo->created_at == $this->_inputInfo->updated_at)  return;
    
    $created_at = strtotime( $this->_inputInfo->created_at ) + 0;
    $updated_at = strtotime( $this->_inputInfo->updated_at ) + 0;
    if( $updated_at - $created_at < 10 )  return;
    
    $this->order_create( 'Order Updated' );
  }
    
  public function order_cancel()
  {
    $this->Log_model->add( 'Webhook', 'Order Cancelled', $this->_inputInfo->name, '' );
    
    // Update the order status
    $this->load->model( 'Order_model' );
    $this->Order_model->rewriteParam( $this->_shop );
    $this->Order_model->updateStatus( $this->_inputInfo->id, array( 'status' => 'cancelled' ) );
  }

  public function product_create()
  {
    // Log
    $this->Log_model->add( 'Webhook', 'Product Create', $this->_inputInfo->id, '' );
        
    $this->load->model( 'Process_model' );
    $this->Process_model->product_create( $this->_inputInfo, $this->_arrStoreList[ $this->_shop ], 'Product Create' );  
      
    header( "HTTP/1.1 200 OK" );  

  }
  
  public function product_update()
  {
    $this->load->model( 'Process_model' );
    $this->Process_model->product_create( $this->_inputInfo, $this->_arrStoreList[ $this->_shop ], 'Product Update' );        
  }

  public function product_delete()
  {
    // Log
    $this->Log_model->add( 'Webhook', 'Product Delete', $this->_inputInfo, '' );
    
    // Define the product model
    $this->load->model( 'Product_model' );
    $this->Product_model->rewriteParam( $this->_shop );
    
    // Delete Product
    $this->Product_model->deleteProduct( $this->_inputInfo );
  }
  
}
    
