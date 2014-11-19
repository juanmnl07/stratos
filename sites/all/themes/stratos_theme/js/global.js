jQuery.noConflict(); 
jQuery(document).ready(function(){

	//agregar menu slicknav (responsivo)
	 $('#block-system-main-menu .menu').slicknav({
            label: '',
            duration: 1000,
            easingOpen: "easeOutBounce", //available with jQuery UI
            prependTo:'#block-system-main-menu'
        });
	
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

	
    <!--Script efecto scroll a las anclas-->
	jQuery('.banner-grande-caption a[href*=#]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    if(target != ''){
		    arget = jQuery(target);

		    jQuery('html, body').stop().animate({
		        'scrollTop': arget.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		}else{
			return true;
		}
	});	
	
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

	jQuery('[placeholder]').focus(function() {
	  var input = jQuery(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = jQuery(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur();


    <!--Valida el formulario de comentarios-->
	jQuery('.webform-client-form').on('submit', function(e){
		e.preventDefault();
		var v = 1;
		jQuery(this).find(':input,textarea').each(function() {
			var valor = this.value;
			var req = jQuery("#"+this.id).hasClass("required");
			if(req == true && (valor) == "" || (valor) == null || (valor) == jQuery("#"+this.id).attr('placeholder')) {
				alert('Campos obligatorios estan vacios');
				jQuery("#"+this.id).focus();
				v = 0;return false;
			}					
			if((this.id)=='edit-submitted-correo'){
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(valor)) {
					alert('Por favor digite un E-mail válido');
					jQuery("#"+this.id).focus();
					v = 0;return false;
				}
			}
		});	
		if(v == 1){
			this.submit();
		}

	});	

});


function wait(nsegundos) {
objetivo = (new Date()).getTime() + 1000 * Math.abs(nsegundos);
while ( (new Date()).getTime() < objetivo );
};