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
	if(IE === true){ box.delay(100).hide(); } 
	
	jQuery(".box-cotainer").hover(function() {
		var boxinfo = jQuery(this).find( ".roll-over" );
		boxinfo.delay(100).show().animate({"transform": "scale(1,1)"});
		if(IE === true){ boxinfo.delay(100).show(); } 			
	}, function(){
		var boxinfo = jQuery(this).find( ".roll-over" );
		boxinfo.delay(100).show().animate({"transform": "scale(0,0)"});
		if(IE === true){ boxinfo.delay(100).hide(); } 
	});

	jQuery(function() {
	    jQuery( "#accordion" ).accordion();
	 });


});;
