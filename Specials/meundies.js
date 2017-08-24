$( document ).ready(function(){
	var image_counts = $(".pdp-slides").children().length;	
  	  
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
  
    $(".pdp-slide-button").click(function(){
		var data_current_slide_index = $(' .pdp-slides ').attr('data-current-slide-index');
      	var current_image = $( ".pdp-slides " ).children().eq(data_current_slide_index);
      	var current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(data_current_slide_index);

      	current_image.css({'opacity':'0', 'visibility':'hidden'});
      	current_slide_btn.removeClass('active');
        
      	var new_index = $( ".pdp-slide-buttons .pdp-slide-button" ).index( this );
      
      	current_image = $( ".pdp-slides " ).children().eq(new_index);
      	current_slide_btn = $( ".pdp-slide-buttons " ).children().eq(new_index);
      	current_image.css({'opacity':'1', 'visibility':'visible'});
      	current_slide_btn.addClass('active');

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
  
  $(".pdp-product-form-size-selector").click(function(){
  	var active_s = $(this).parent().children('.active');
    active_s.removeClass('active');
    $(this).addClass('active');
  });
  
  $(".pdp-tab").click(function(){
  	var active_t = $(this).parent().children('.active');
    active_t.removeClass('active');
    $(this).addClass('active');
  });  
  
  $(".pdp-product-form-color-selector").click(function(){
  	var active_c = $(this).parent().children('.active');
    active_c.removeClass('active');
    $(this).addClass('active');
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
  
});


