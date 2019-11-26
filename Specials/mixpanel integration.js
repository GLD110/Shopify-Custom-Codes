<!-- start Mixpanel --><script type="text/javascript">(function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
mixpanel.init("033f41a0ecff6ea7be8b84fae0765dee");</script>
{% if customer %}
  <script>
    mixpanel.identify('{{customer.id}}');
  </script> 
{% endif %}

  <script type="text/javascript">
    mixpanel.track_links("#shopify-section-header a", "click nav link", {
    "referrer": document.referrer
    });
  </script>
  
  <script type="text/javascript">
    mixpanel.track_links("#shopify-section-footer a", "click nav link", {
    "referrer": document.referrer
    });
  </script> 
<!-- end Mixpanel -->


<!-- start Mixpanel --><script type="text/javascript">(function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
mixpanel.init("033f41a0ecff6ea7be8b84fae0765dee");</script><!-- end Mixpanel -->

{% assign customer = checkout.customer %}
<script>
  // Retrieve Mixpanel ID
  mixpanel.identify('{{ customer.id }}');
</script>   
  
<script>
mixpanel.people.set({
  "$name": "{{ customer.first_name }} {{ customer.last_name }}",
  "$email": "{{ customer.email }}",
  "last_updated": new Date()
});

mixpanel.people.track_charge("{{checkout.total_price | money_without_currency}}".replace(",",""));

mixpanel.track("Order Completed");
</script>


<script>
mixpanel.track(
    "Product Viewed",
    {"name": "{{product.title}}",
    "price": "{{ product.price | money_without_currency }}",
    "brand": "{{product.vendor}}",
    "category": "{{ collection.title }}",
    "variant": "{% for variant in product.variants %}{{ variant.sku }}{% endfor %}"
    });
</script>

<script>
  $( document ).ready(function() {
    $("#AddToCart").click(function(){
        mixpanel.track("Added to Cart", {"name": "{{ product.title }}"});
    });
});
</script>





<script>
mixpanel.track(
    "Product Viewed",
    {"name": "{{product.title}}",
    "price": "{{ product.price | money_without_currency }}",
    "brand": "{{product.vendor}}",
    "category": "{{ collection.title }}",
    "variant": "{% for variant in product.variants %}{{ variant.sku }}{% endfor %}"
    });
</script>

<script>
  $( document ).ready(function() {
    $("#AddToCart").click(function(){
        mixpanel.track("Added to Cart", {"name": "{{ product.title }}"});
    });
});
</script>


                  
<!-- Begin Mixpanel integration for hidden input to make the ID match between domains -->
<input type="hidden" id="mixpanel_id" name="attributes[mixpanel_id]" value="" />
<!-- End Mixpanel integration -->




<!-- Begin Mixpanel -->
<script>
    $(document).ready(function() {
        window.onload = function() {
            document.getElementById("mixpanel_id").value = mixpanel.get_distinct_id();                      		
        };      	      	

        $(".bootstrap-touchspin-down").click(function(){          	
          	var qty = $('.cart__quantity-selector').val();
            if(qty == 0){
              mixpanel.track("Removed from Cart", {"name": "{% for item in cart.items %}{{item.product.title}}, {% endfor %}"});
            }
        });
    });
</script>
<!-- End Mixpanel -->

