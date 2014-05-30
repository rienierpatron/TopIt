(function($) {

	$.fn.topIt = function( options ) {

		var settings = $.extend({
			label			: null, //label of the button
			background		: null, //color of the button
			border			: null,
			color			: null, //color of the text
			fontSize		: null, //text font size
			position		: null, //positioning (left,right)
			startingDistance: null, //distance of scroll where button will show
			speed			: null,
			theme 		 	: null,
		},options);

		return this.each( function() {
			if(settings.label){
				$(this).html(settings.label);
			}else{
				$(this).html("TOP");
			}

			
			$(this).css( 'display', 'inline-block');
			

			if(settings.background){
				$(this).css('background-color',settings.background);
			}else{
				$(this).css('background-color','#000000');
			}

			if(settings.color){
				$(this).css('color',settings.color);
			}else{
				$(this).css('color','#FFFFFF');
			}

			if(settings.border){
				$(this).css('border',settings.border);
			}

			if(settings.fontSize){
				$(this).css('font-size',settings.fontSize);
			}else{
				$(this).css('font-size','20px');
			}

			if(settings.position){
				if(settings.position == "right"){
					$(this).css('right',0);
				}
			}

			if(settings.startingDistance){
				distance = settings.startingDistance;
			}else{
				distance = 100;
			}
		    if ($(window).scrollTop() >= distance) {
		    	if($(".topIt:hidden" ).length == 1){
		    		$('.topIt').fadeIn();
		    	}
		    }else{
		        $('.topIt').fadeOut();
		    }

			//scroll handler
			$(window).scroll(function() {
				if(settings.startingDistance){
					distance = settings.startingDistance;
				}else{
					distance = 100;
				}
			    if ($(window).scrollTop() >= distance) {
			    	if($(".topIt:hidden" ).length == 1){
			    		$('.topIt').fadeIn();
			    	}
			    }else{
			        $('.topIt').fadeOut();
			    }
			});

			$(this).click(topIt);
		});

		function topIt(){
			if(settings.speed){
				speed = settings.speed;
			}else{
				speed = 100;
			}
			$("html,body").animate({ scrollTop: 0 }, speed);
  			return false;
		}
	};

}(jQuery));