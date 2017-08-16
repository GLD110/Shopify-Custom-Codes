$( document ).ready(function(){
	var image_counts = $(".pdp-slides").children().length;	
  	
  	//when clicking slide narrow 
    $( '.pdp-slide-button-prev' ).click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
        
      	var data_prev_slide_index = parseInt(data_current_slide_index) - 1;
      
      	if(data_current_slide_index == 0)
          data_prev_slide_index = image_counts - 1;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_prev_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_prev_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');

      	$(' .pdp-slides ').attr('data-current-slide-index', data_prev_slide_index);
    });  
  
    $( '.pdp-slide-button-next' ).click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
        
      	var data_next_slide_index = parseInt(data_current_slide_index) + 1;
      
      	if(data_next_slide_index == image_counts)
          data_next_slide_index = 0;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_next_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_next_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');

      	$(' .pdp-slides ').attr('data-current-slide-index', data_next_slide_index);
    });  
  
    $( '.pdp-slide-controls-prev' ).click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
        
      	var data_prev_slide_index = parseInt(data_current_slide_index) - 1;
      
      	if(data_current_slide_index == 0)
          data_prev_slide_index = image_counts - 1;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_prev_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_prev_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');

      	$(' .pdp-slides ').attr('data-current-slide-index', data_prev_slide_index);
    });  
  
    $( '.pdp-slide-controls-next' ).click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
        
      	var data_next_slide_index = parseInt(data_current_slide_index) + 1;
      
      	if(data_next_slide_index == image_counts)
          data_next_slide_index = 0;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_next_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_next_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');

      	$(' .pdp-slides ').attr('data-current-slide-index', data_next_slide_index);
    });  
    
  	//when swiping on mobile 
    $( '.full-width-image.pdp-slide-mobile-image.slide-selectors' ).on("swipeleft", function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);
      	var current_m_image = $( "#flickity-slider " ).children().eq(data_current_slide_index);       

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
      	current_m_image.hide();
        
      	var data_prev_slide_index = parseInt(data_current_slide_index) - 1;
      
      	if(data_current_slide_index == 0)
          data_prev_slide_index = image_counts - 1;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_prev_slide_index);
      	current_m_image = $( "#flickity-slider " ).children().eq(data_prev_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_prev_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');
      	current_m_image.show();

      	$(' .pdp-slides ').attr('data-current-slide-index', data_prev_slide_index);
    });  
  
    $( '.full-width-image.pdp-slide-mobile-image.slide-selectors' ).on("swiperight", function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);
      	var current_m_image = $( "#flickity-slider " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
      	current_m_image.hide();
        
      	var data_next_slide_index = parseInt(data_current_slide_index) + 1;
      
      	if(data_next_slide_index == image_counts)
          data_next_slide_index = 0;
      
      	current_image = $( ".pdp-slides " ).children().eq(data_next_slide_index);
      	current_m_image = $( "#flickity-slider " ).children().eq(data_next_slide_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_next_slide_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');
      	current_m_image.show();

      	$(' .pdp-slides ').attr('data-current-slide-index', data_next_slide_index);
    });   
  	
  	//when clicking slide dot
    $(".pdp-slide-button").click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);
      	var current_m_image = $( "#flickity-slider " ).children().eq(data_current_slide_index); 

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
      	current_m_image.hide();
        
      	var new_index = $( ".pdp-slide-buttons .pdp-slide-button" ).index( this );
      
      	current_image = $( ".pdp-slides " ).children().eq(new_index);
      	current_m_image = $( "#flickity-slider " ).children().eq(new_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(new_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');
      	current_m_image.show();
      
      	$(' .pdp-slides ').attr('data-current-slide-index', new_index);		
    });
  
  $(" .pdp-product-form-sizes-label a ").click(function(){
  	$(" #product-sizechart-modal ").show();     
  });
  
  $(" .pdp-product-form-mobile-size-guide-link ").click(function(){
  	$(" #product-sizechart-modal ").show();     
  });  
  
  $(" .size-chart-modal-close-button ").click(function(){
  	$(" #product-sizechart-modal ").hide();
  });
  
  $(" .subscribe-checkbox-input-label ").click(function(){
	   var status = $(" .subscribe-checkbox-input ").attr('checked');
    
      if(status == 'checked')
          $(" .subscribe-checkbox-input ").attr('checked', false);
	  else
       	$(" .subscribe-checkbox-input ").attr('checked', true);

  });
  
  $(" .product-form-subscribe-block-learn-more ").click(function(){
  	$(" .product-form-subscribe-tooltip-inner ").addClass('active');
  });
  
  $(" .product-form-subscribe-tooltip-exit ").click(function(){
  	$(" .product-form-subscribe-tooltip-inner ").removeClass('active');
  });
  
  var w_width = $(window).width();
  if(w_width < 1024)
    $(".pdp-slides-mobile").addClass('flickity-enabled');
  
  $(" .pdp-mobile-section-header ").click(function(){
  	var div_height = $(" .pdp-mobile-section-wrap ").height();
    console.log(div_height);
    if(div_height == 0)
      $(" .pdp-mobile-section-wrap ").css('height', 'auto');
    else
      $(" .pdp-mobile-section-wrap ").height(0);
  });
  
  //when page load
  var selected_variant = $(" #ProductSelect ").find("option:selected");
  $(" [data-size-presentation = '" + selected_variant.attr('size') + "'] ").addClass('active');
  $(" [data-color-type = '" + selected_variant.attr('tab') + "'] ").addClass('active');
  $(" [data-presentation = '" + selected_variant.attr('color') + "'] ").addClass('active');
  
  var next_t= $(" [data-color-type = '" + selected_variant.attr('tab') + "'] ").attr('data-color-type');
  var reactive_tab_image = $(".pdp-tab-images").find("li[data-image-id='" + next_t + "']"); 
  reactive_tab_image.addClass('active');
  reactive_tab_image.children('img').css('opacity', '1');   
  
  $('.pdp-product-form-price').html(selected_variant.attr('price'));   
  
  //When Option Clicking
  $(".pdp-product-form-size-selector").click(function(){
    var active_t= $(".pdp-tab.active").attr('data-color-type');
    var active_c= $(".pdp-product-form-color-selector.active").attr('data-presentation');
    var next_s = $(this).attr('data-size-presentation');
    var next_variant = $("#ProductSelect").find("option[size='" + next_s + "'][tab='" + active_t + "'][color='" + active_c + "']");

    if(next_variant.length == 1){
      
      $('#sold_out').hide();
      var last_variant = $(" #ProductSelect ").find("option:selected");
      last_variant.attr('selected', false);
      next_variant.attr('selected', true);
      
      var active_s = $(this).parent().children('.active');
      active_s.removeClass('active');
      $(this).addClass('active');
      
      var price = next_variant.attr('price');
      $('.pdp-product-form-price').html(price);
      var pro = $('.bold-ro__initial-discount-percent').html();
      $('.percent-savings').html(pro);      
      pro = parseFloat(pro.replace('%', ''));
      var discount_price = parseFloat(price.replace('$', '')) * (100 - pro) / 100 ;
      $('.bold-ro__initial-discount-price').html('$' + discount_price.toFixed(2));
      $('.plan-price').html('$' + discount_price.toFixed(2));       
      
      //control image opacity with tab option
      var active_tab_image= $(".pdp-tab-image.active");
      active_tab_image.removeClass('active');
      active_tab_image.children('img').css('opacity','0.4');
      var reactive_tab_image = $(".pdp-tab-images").find("li[data-image-id='" + active_t + "']"); 
      reactive_tab_image.addClass('active');
      reactive_tab_image.children('img').css('opacity', '1');       
    }
    else{
      $('#sold_out').toggle();
      return false;
    }    
  });
  
  $(".pdp-tab").click(function(){
    var next_t= $(this).attr('data-color-type');
    var active_c= $(".pdp-product-form-color-selector.active").attr('data-presentation');
    var active_s = $(".pdp-product-form-size-selector.active").attr('data-size-presentation');
    var next_variant = $("#ProductSelect").find("option[size='" + active_s + "'][tab='" + next_t + "'][color='" + active_c + "']");

    if(next_variant.length == 1){
      
      $('#sold_out').hide();
      var last_variant = $(" #ProductSelect ").find("option:selected");
      last_variant.attr('selected', false);
      next_variant.attr('selected', true);
      
      var active_t = $(this).parent().children('.active');
      active_t.removeClass('active');
      $(this).addClass('active');
      
      var price = next_variant.attr('price');
      $('.pdp-product-form-price').html(price); 
      var pro = $('.bold-ro__initial-discount-percent').html();
      $('.percent-savings').html(pro);      
      pro = parseFloat(pro.replace('%', ''));
      var discount_price = parseFloat(price.replace('$', '')) * (100 - pro) / 100 ;
      $('.bold-ro__initial-discount-price').html('$' + discount_price.toFixed(2)); 
      $('.plan-price').html('$' + discount_price.toFixed(2));       
      
      //control image opacity with tab option
      var active_tab_image= $(".pdp-tab-image.active");
      active_tab_image.removeClass('active');
      active_tab_image.children('img').css('opacity','0.4');
      var reactive_tab_image = $(".pdp-tab-images").find("li[data-image-id='" + next_t + "']"); 
      reactive_tab_image.addClass('active');
      reactive_tab_image.children('img').css('opacity', '1');      
    } 
    else{
      $('#sold_out').toggle();
      return false;
    }
  });  
  
  $(".pdp-product-form-color-selector").click(function(){
    var active_t= $(".pdp-tab.active").attr('data-color-type');
    var next_c= $(this).attr('data-presentation');
    var active_s = $(".pdp-product-form-size-selector.active").attr('data-size-presentation');
    var next_variant = $("#ProductSelect").find("option[size='" + active_s + "'][tab='" + active_t + "'][color='" + next_c + "']");

    if(next_variant.length == 1){
      $('#sold_out').hide();
      var last_variant = $(" #ProductSelect ").find("option:selected");
      last_variant.attr('selected', false);
      next_variant.attr('selected', true);
      
      var active_c = $(this).parent().children('.active');
      active_c.removeClass('active');
      $(this).addClass('active');
      
      var price = next_variant.attr('price');
      $('.pdp-product-form-price').html(price);
      var pro = $('.bold-ro__initial-discount-percent').html();
      $('.percent-savings').html(pro);      
      pro = parseFloat(pro.replace('%', ''));
      var discount_price = parseFloat(price.replace('$', '')) * (100 - pro) / 100 ;
      $('.bold-ro__initial-discount-price').html('$' + discount_price.toFixed(2)); 
      $('.plan-price').html('$' + discount_price.toFixed(2)); 
      
      //control image opacity with tab option
      var active_tab_image= $(".pdp-tab-image.active");
      active_tab_image.removeClass('active');
      active_tab_image.children('img').css('opacity','0.4');
      var reactive_tab_image = $(".pdp-tab-images").find("li[data-image-id='" + active_t + "']"); 
      reactive_tab_image.addClass('active');
      reactive_tab_image.children('img').css('opacity', '1');        
    }    
    else{
      $('#sold_out').toggle();
      return false;
    }    
  }); 
  
  $('.pdp-tab-image').click(function(){
  	var tab_id = $(this).attr('data-image-id');
    var active_tab = $('.pdp-tabs').find("li[data-color-type='" + tab_id + "']");
    active_tab.click();
  });
  
  function app_delay(){
  	$('.ro_widget').hide();
    var pro = $('.bold-ro__initial-discount-percent').html();
    $('.percent-savings').html(pro); 

    pro = parseFloat(pro.replace('%', ''));
    var price = selected_variant.attr('price');
    var discount_price = parseFloat(price.replace('$', '')) * (100 - pro) / 100 ;
    $('.plan-price').html('$' + discount_price.toFixed(2));     
  }
 
  setTimeout(app_delay(), 1000);
  
  $('.subscribe-checkbox-input-label').click(function(){
  	var subscribed = $('.subscribe-checkbox-input').attr('checked');

    if(subscribed == 'checked'){
      $('.bold-ro__recurring-div .bold-ro__mixed-radio-btn').click();
    }
    else {
      $('.bold-ro__one-time-div .bold-ro__one-time-radio-btn').click();
    }
  });
  
});


