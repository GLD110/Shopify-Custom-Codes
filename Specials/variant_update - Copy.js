  $('.single-option-selector').change(function(){
      
    var selected_index = $(this).children('option:selected').index();    
    var variant_id = $('#productSelect-product-template option').eq(selected_index).val();    
    var handle = '{{ product.handle }}';  
    
    jQuery.getJSON('/products/' + handle + '.js', function(product) {      
      for(var v in product.variants){
      	if(variant_id == product.variants[v].id)
          var price = product.variants[v].price;        
      }      
      
      $('#discount_table .two .dollar').html('$' + (price * 0.95 / 100).toFixed(2));
      $('#discount_table .two .count').html(Math.ceil(200 / price * 100) + '+');
      $('#discount_table .five .dollar').html('$' + (price * 0.90 / 100).toFixed(2));
      $('#discount_table .five .count').html(Math.ceil(500 / price * 100) + '+');
      $('#discount_table .ten .dollar').html('$' + (price * 0.87 / 100).toFixed(2));
      $('#discount_table .ten .count').html(Math.ceil(1000 / price * 100) + '+');
      $('#discount_table .twenty .dollar').html('$' + (price * 0.85 / 100).toFixed(2));
      $('#discount_table .twenty .count').html(Math.ceil(2000 / price * 100) + '+');
      $('#discount_table .fifty .dollar').html('$' + (price * 0.80 / 100).toFixed(2));
      $('#discount_table .fifty .count').html(Math.ceil(5000 / price * 100) + '+');
    } );
      //location.reload();
  });