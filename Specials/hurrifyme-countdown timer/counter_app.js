//from https://hurrifyme.com/shopify/app/counter/counter_app.js
if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = hurrifyLoad;
} else {
  hurrifyLoad();
}

function hurrifyLoad() {
  var progress_bar_percent = 99;
  var stop_running = false;

  var decrease_after = 60;//in sec
  var decrease_after_first_item = 1; //in sec
  var min_of_remaining_items = 2;
  min_scarcity_number_drop_to =1;

  var counter_app_base_url = "https://hurrifyme.com/shopify/app/counter"; //production link
  //var counter_app_base_url = "https://www.tak47.com/hurrify/app/counter";

  function progress() {
            var val = jQuery("#progressbar").progressbar("value") || 0;
            jQuery("#progressbar").progressbar("value", val + 1);
            if (val < progress_bar_percent) {
                setTimeout(progress, 20);
            }
  }
  function progress_back() {
          var val = jQuery("#progressbar").progressbar("value") || 99;
          jQuery("#progressbar").progressbar("value", val - 1);
          if (val > progress_bar_percent) {
                setTimeout(progress_back, 20);
          }
  }
  function scarcity_progress() {
      var val = jQuery("#progressbar").progressbar("value") + 1;
      if(!stop_running){
        increasing_sold_items++;
        scarcity_progress_bar_percent = increasing_sold_items *2;
        setCookie("cookie_increasing_sold_items", increasing_sold_items, 3);
        jQuery('#scarcitynumber').css('background-color', '#E04848');
        jQuery('#scarcitynumber').css('color', '#fff');
        jQuery('#scarcitynumber').css('border-radius','5px');
        setTimeout(function(){
        jQuery('#scarcitynumber').css('background-color', '#fff');
        jQuery('#scarcitynumber').css('color', '#A94442');
        },1000 * 60 * 0.03);
        jQuery("#scarcitynumber").text(increasing_sold_items);
        jQuery("#progressbar").progressbar("value", val);
      }
      if(val == 100) {
            stop_running = true;
      }
  }
  function scarcity_progress_back() {
    if(!stop_running && scarcity_remaining_items >= min_scarcity_number_drop_to + 1) {
      scarcity_remaining_items--;
      scarcity_progress_bar_percent = scarcity_remaining_items *2;
      setCookie("cookie_scarcity_remaining_items", scarcity_remaining_items, 1);
      jQuery('#scarcitynumber').css('background-color', '#E04848');
      jQuery('#scarcitynumber').css('color', '#fff');
      jQuery('#scarcitynumber').css('border-radius','5px');
      setTimeout(function(){
      jQuery('#scarcitynumber').css('background-color', '#fff');
      jQuery('#scarcitynumber').css('color', '#A94442');
      },1000 * 60 * 0.03);
      jQuery("#scarcitynumber").text(scarcity_remaining_items);
      jQuery("#progressbar").progressbar("value", scarcity_progress_bar_percent);
      if(scarcity_remaining_items <= min_scarcity_number_drop_to) {
              stop_running = true;
      }
    }
  }  
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return '';
  }
  window.hurrifyMeLoaded = false;

  function hurrifyMeReady() {
    if (window.hurrifyMeLoaded) {
      return;
    }
    window.hurrifyMeLoaded = true;

    if(typeof __st.pageurl == 'undefined')
      return;

    var single_counter = false;
    var multi_counter = false;

    if(typeof __st.p == 'undefined') {
      if(__st.pageurl.indexOf('/linear/') < 0) {
        return;
      } else {
        single_counter = true;

      }
    } else {
      if( __st.p == 'product' ||  __st.p == 'home') {

        single_counter = true;

                  } else if( __st.p == 'collection') {

        multi_counter = true;

      } else {
        return;
      }
    }

    if(single_counter) {

      if(jQuery('#looxReviews').data('product-id')) {
        var product_id = jQuery('#looxReviews').data('product-id');
      } else {
        var product_id = __st.rid;
        if(typeof product_id === 'undefined' && __st.s)
        {
          product_id = __st.s.replace('products-','');
        }
        else if(typeof product_id === 'undefined')
        {
          product_id = "one_product";
        }
      }

      var shop_name = Shopify.shop;
      var  product_page= /(.*)\/products\/(.*)/;
      var  product_page_check = product_page.exec(window.location.href);
      jQuery("head").append('<link rel="stylesheet" href="' + counter_app_base_url + '/style.css?v=8" type="text/css" />');
      if(jQuery("#counter_container").length) {
        jQuery("#counter_container").append('<div id="text_above_timer"></div>');
        jQuery( "#counter_container" ).append('<div id="my-counter" class="clock" ></div>');
      } else if(product_page_check != null || product_id == "one_product"){
        jQuery("form[action='/cart/add']").append('<div id="text_above_timer" class="tmp_text_above_timer"></div>');
        jQuery("form[action='/cart/add']").append('<div id="my-counter" class="clock tmp_my-counter" ></div>');
      }

      jQuery.getScript( counter_app_base_url + "/getProductCounter.php?product_id=" + product_id + "&shop=" + shop_name, function( data, textStatus, jqxhr ) {
        var expired = false;
        if(loyal_customer == true){
          var lc_ein = getCookie("_hur_lc_"+product_id);
          var lc_lu = getCookie("_hur_lu_"+product_id);
          var now = Math.floor(Date.now() / 1000);
          if(now > parseInt(lc_ein) && parseInt(lc_lu) == last_update_time){
            expired = true;
          }
          else{
            expired = false;
            var expireIn = Math.floor(Date.now() / 1000) + product_counter;
            setCookie("_hur_lc_"+ product_id, expireIn, lc_cookies);
            setCookie("_hur_lu_"+ product_id, last_update_time, lc_cookies);
          }
        }
        if(product_counter > 0 && expired == false) {
          jQuery.getScript( "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js", function( data, textStatus, jqxhr ) {

            if(banner_bar_display) {
              jQuery( "body" ).append('<div id="banner_bar_counter"></div>');
              var element = jQuery('#my-counter').detach();
              jQuery('#banner_bar_counter').append(element);
              element = jQuery('#text_above_timer').detach();
              jQuery('#banner_bar_counter').append(element);

              jQuery('#progressbar').remove();
              jQuery("form[action='/cart/add'] .tmp_text_above_timer").remove();
              jQuery("form[action='/cart/add'] .tmp_my-counter").remove();

              jQuery('#banner_bar_counter').css('background-color',banner_bar_bg_color);
            }
            //enable light version
            if(light_counter == 1)
              $("#my-counter").addClass("light");
            jQuery("head").append('<link rel="stylesheet" href="' + counter_app_base_url + '/style_1/flipclock.min.css" type="text/css" />');
              //loading counter style
              if(counter_style == 'style_1') {
                jQuery.getScript( counter_app_base_url + "/style_1/flipclock.min.js", function( data, textStatus, jqxhr ) {
                    if(timer_display){
                      var clock;
                      clock = jQuery('#my-counter').FlipClock({
                        clockFace: 'DailyCounter',
                        autoStart: false,
                        callbacks: {
                          stop: function() {
                            //remove the counter when it's done 
                            $("#text_above_timer").remove();
                            $("#my-counter").remove();
                            $("#banner_bar_counter").remove(); // remove banner bar if it's exists
                          }
                        }
                      });
                    clock.setCountdown(true);
                    clock.setTime(product_counter);
                    clock.start();
                    jQuery('.flip-clock-divider.days .flip-clock-label').html(days_label);
                    jQuery('.flip-clock-divider.hours .flip-clock-label').html(hours_label);
                    jQuery('.flip-clock-divider.minutes .flip-clock-label').html(minutes_label);
                    jQuery('.flip-clock-divider.seconds .flip-clock-label').html(seconds_label);
                  }
                  jQuery('#text_above_timer').show();
                });
              }
              else if(counter_style == 'style_6'){
                    jQuery("head").append('<link rel="stylesheet" href="' + counter_app_base_url + '/style_6/TimeCircles.css" type="text/css" />');                
                    jQuery.getScript( counter_app_base_url + "/style_6/TimeCircles.js", function( data, textStatus, jqxhr ) {
                      jQuery('#my-counter').attr("data-timer",product_counter).TimeCircles({
                      count_past_zero: false,
                      circle_bg_color: timer_backColor,
                      light : light_counter,
                      time: {
                              Days: { 
                                      text : days_label,
                                      color: progress_bar_color 
                              },
                              Hours: { 
                                      text: hours_label,
                                      color: progress_bar_color 
                              },
                              Minutes: { 
                                      text: minutes_label,
                                      color: progress_bar_color 
                              },
                              Seconds: { 
                                      text: seconds_label,
                                      color: progress_bar_color 
                              }
                      }
                      }).addListener(countdownComplete);
                      function countdownComplete(unit, value, total){
                        if(total<=0){
                            $("#text_above_timer").remove();
                            $("#my-counter").remove();
                            $("#banner_bar_counter").remove();
                        }
                      }
                      jQuery('#text_above_timer').show();
                    });
                  }
              else{
                jQuery("head").append('<link rel="stylesheet" href="' + counter_app_base_url + '/'+counter_style+'/countdown.css" type="text/css" />');
                jQuery.getScript( counter_app_base_url + "/"+counter_style+"/countdown.js", function( data, textStatus, jqxhr ) {
                  jQuery('#text_above_timer').show();
                  if(timer_display){
                    d = new Date();
                    my_date = d.getDate()  + product_counter_d ;
                    my_hour = d.getHours()  + product_counter_h  ;
                    my_min = d.getMinutes() + product_counter_m;
                    my_second = d.getSeconds() + product_counter_s  ;
                    if(my_second > 60) {
                      my_second = my_second - 60;
                      my_min = my_min + 1;
                    }
                    if(my_min > 60) {
                      my_min = my_min - 60;
                      my_hour = my_hour + 1;
                    }
                    if(my_hour > 24) {
                      my_hour = my_hour - 24;
                      my_date = my_date + 1;
                    }
                    counter = new Date(d.getFullYear() ,d.getMonth(),my_date,my_hour,my_min,my_second);
                    jQuery('#my-counter').countdown(counter, function(event) {
                    jQuery(this).html(event.strftime(
                    '<div class="hurrifycountdown"><div class="value">%D</div><div class="label">'+days_label+'</div></div>'
                    + '<div class="hurrifycountdown"><div class="value">%H</div><div class="label">'+hours_label+'</div></div>'
                    + '<div class="hurrifycountdown"><div class="value">%M</div><div class="label">'+minutes_label+'</div></div>'
                    + '<div class="hurrifycountdown"><div class="value">%S</div><div class="label">'+seconds_label+'</div></div><div style="clear:both"></div>'));
                    }).on('finish.countdown', function(event) {
                      //remove the counter when it's done 
                      $("#text_above_timer").remove();
                      $("#my-counter").remove();
                      $("#banner_bar_counter").remove(); // remove banner bar if it's exists
                    });                    
                  }
                });
              }
            if(product_progress_bar) {
              if(progress_display){
                jQuery("#progressbar").progressbar({
                  value: false,
                  change: function () {
                  },
                  complete: function () {
                  }
                });
                jQuery('#progressbar .ui-widget-header').css('background',progress_bar_color);
                jQuery('#progressbar .ui-widget-header').css('border-color',progress_bar_color);
                jQuery('#progressbar.ui-widget-content').css('background-color',timer_backColor);
                jQuery('#progressbar.ui-widget-content').css('border','0');
              }
              progress_bar_percent = shop_progress_bar_percent;
              if(product_progress_bar == 1) {
                setTimeout(progress, 300);
              }else if(product_progress_bar == 2) {
                setTimeout(progress_back, 300);
              }else if(product_progress_bar == 3) {

                if(product_set_scarcity_number){

                  if(product_set_scarcity_time){
                    decrease_after = product_set_scarcity_time;//in sec
                  }
                  var cookie_scarcity_remaining_items = getCookie("cookie_scarcity_remaining_items");
                  if(cookie_scarcity_remaining_items == ''){
                    cookie_scarcity_remaining_items = product_set_scarcity_number;
                  }
                  if(scarcity_enable_cookies == '1' && cookie_scarcity_remaining_items >= min_scarcity_number_drop_to){
                    scarcity_remaining_items = cookie_scarcity_remaining_items;
                  }else{
                    scarcity_remaining_items = product_set_scarcity_number;//define in getProductCounter.php
                  }

                  jQuery('#scarcitynumber').html(scarcity_remaining_items);


                  //setTimeout(scarcity_progress_back, 1000 * decrease_after_first_item);
                  progress_bar_percent = scarcity_remaining_items * 2;
                  setTimeout(progress_back, 300);
                  setInterval(scarcity_progress_back, 1000 * decrease_after);
                }

              }else if(product_progress_bar == 5) {

                if(product_set_scarcity_number){

                  if(product_set_scarcity_time){
                    var increase_after = product_set_scarcity_time * 1000;//in sec
                    console.log(increase_after);
                  }
                  var cookie_increasing_sold_items = getCookie("cookie_increasing_sold_items") 
                  if(cookie_increasing_sold_items == ''){
                    cookie_increasing_sold_items = product_set_scarcity_number;
                  }
                  if(scarcity_enable_cookies == '1'){
                    increasing_sold_items = cookie_increasing_sold_items;
                  }else{
                    increasing_sold_items = product_set_scarcity_number;//define in getProductCounter.php
                  }

                  jQuery('#scarcitynumber').html(increasing_sold_items);


                  //setTimeout(scarcity_progress_back, 1000 * increase_after_first_item);
                  progress_bar_percent = 60;
                  setTimeout(progress, 300);
                  setInterval(scarcity_progress, increase_after);
                }

              }else if(product_progress_bar == 4) {

                setTimeout(progress, 5);
                jQuery('.watching-progressbar #progressbar .progress-label').css('width',shop_progress_bar_percent + '%');
              }
            }
          });
        } 
      });

    } else if(multi_counter) {

      var shop_name = Shopify.shop;

      jQuery.getScript( counter_app_base_url + "/getProductCounterOnCollection.php?shop=" + shop_name, function( data, textStatus, jqxhr ) {
        if(collection_counter.product_count > 0) {
          jQuery.getScript( "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js", function( data, textStatus, jqxhr ) {

            jQuery("head").append('<link rel="stylesheet" href="' + counter_app_base_url + '/style_collection/countdown.css?t=1" type="text/css" />');

            jQuery.getScript( counter_app_base_url + "/style_collection/countdown.js", function( data, textStatus, jqxhr ) {
              for(i=0 ; i < collection_counter.product_count; i ++) {
                product_counter = collection_counter.product_list[i];
                var product_handle = '/products/' + product_counter['product_shopify_handle'];


                var href_object = jQuery( "a[href*='" + product_handle + "']" ).first();

                var container = href_object.parent();
                container.css('position', 'relative');
                var collection_product_counter_id = 'collection_product_counter-' + product_counter.shopify_product_id ;
                container.append('<div class="collection_product_counter" id="'+collection_product_counter_id+'"><div class="my-counter clock" ></div><div class="text_above_timer" >'+ product_counter.collection_time_text + '</div></div>');

                jQuery('#'+ collection_product_counter_id).css('width',container.width()  + 'px');

                jQuery('#'+ collection_product_counter_id).css('background-color',product_counter.collection_timer_bar_background);

                jQuery('#' + collection_product_counter_id + '.text_above_timer').show();

                d = new Date();
                //my_month = ;
                my_date = d.getDate()  + product_counter.product_counter_d ;
                my_hour = d.getHours()  + product_counter.product_counter_h  ;
                my_min = d.getMinutes() + product_counter.product_counter_m;
                my_second = d.getSeconds() + product_counter.product_counter_s  ;
                if(my_second > 60) {
                  my_second = my_second - 60;
                  my_min = my_min + 1;
                }
                if(my_min > 60) {
                  my_min = my_min - 60;
                  my_hour = my_hour + 1;
                }
                if(my_hour > 24) {
                  my_hour = my_hour - 24;
                  my_date = my_date + 1;
                }

                //counter = d.getFullYear() + '-' + my_month + '-' + my_date + ' ' + my_hour +':' +  my_min + ':' + my_second;
                counter = new Date(d.getFullYear() ,d.getMonth(),my_date,my_hour,my_min);

                jQuery('#' + collection_product_counter_id + ' .my-counter').countdown(counter, function(event) {

                  jQuery(this).html(event.strftime(
                  '<div class="hurrifycountdown"><div class="value">%D</div></div>'
                  + '<div class="hurrifycountdown"><div class="value">%H</div></div>'
                  + '<div class="hurrifycountdown"><div class="value">%M</div></div>'
                  + '<div class="hurrifycountdown"><div class="value">%S</div></div><div style="clear:both"></div>'));
                })
                .on('finish.countdown', function(event) {
                  $("#counter_container").remove();
                });

              }
            });

          });
        }
      });

    }

  };

  var domReadyCustom = function(callback) {
      document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
  };

  jQuery(document).ready(hurrifyMeReady);
  domReadyCustom(function() { hurrifyMeReady(jQuery)});
}