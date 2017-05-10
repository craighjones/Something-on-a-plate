$(document).ready(function() {	  
	// Slick home slider
	$('.homeslider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});
	
	// Accessible Nutrition image slider
	$('.access-slider').slick({
	  centerMode: true,
	  centerPadding: '1px',
	  arrows: true,
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 820,
		  settings: {
			centerMode: true,
			centerPadding: '0',
		  }
		}
	  ]
	});
	
	// Check body resolution
	if($('body').width() <=583){
		$('.access-slider').slick('unslick')
	}
				
	  
	 // Mobile Menu
	 $('#menu').click(function(){
		$('.menu-wrap').toggleClass('open-menu');
		$('.nav').slideToggle();
	 });
	
	// IE9 placeholder code
	$('[placeholder]').each(function() {  
		var input = $(this);
					
		$(input).focus(function(){
			if (input.val() == input.attr('placeholder')) {
			   input.val('').removeClass("placeholder");
			}
		});
			
		$(input).blur(function(){
		   if (input.val() == '' || input.val() == input.attr('placeholder')) {
			   input.val(input.attr('placeholder')).addClass("placeholder");
		   }
		});
	}).blur();
	
});