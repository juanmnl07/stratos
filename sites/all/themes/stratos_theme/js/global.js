jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	var IE = '';
	if(jQuery.browser.msie == true){
		if(jQuery.browser.version == '8.0' || jQuery.browser.version == '7.0'){
			IE = true;
		}
		
	}
	var box = jQuery("div[class^=roll-over]"); 
	box.show().animate({"transform": "scale(0,0)"});

	jQuery(function() {
	    jQuery( "#accordion" ).accordion();
	 });


});