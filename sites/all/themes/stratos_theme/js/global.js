jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	var IE = '';
	if(jQuery.browser.msie == true){
		if(jQuery.browser.version == '8.0' || jQuery.browser.version == '7.0'){
			IE = true;
		}
		
	}
	var box = jQuery("div[class^=roll-over]");
	
	if(IE === true){
		box.delay(100).hide();
		}  else {
		box.show().animate({"transform": "scale(0,0)"});
	}
	
	jQuery(".box-cotainer").hover(function() {
		var boxinfo = jQuery(this).find( ".roll-over" );
		if(IE === true){
			boxinfo.delay(100).show();
			} else {
			boxinfo.delay(100).show().animate({"transform": "scale(1,1)"});
		}
	}, function(){
		var boxinfo = jQuery(this).find( ".roll-over" );
		if(IE === true){
			boxinfo.delay(100).hide();
			} else {
			boxinfo.delay(100).show().animate({"transform": "scale(0,0)"});
		}
	});


	jQuery( "#accordion" ).accordion();

	jQuery('.views-field-field-beneficios ul li:nth-child(3n+3)').addClass('nth-child-3th');

});