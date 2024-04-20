// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });


  $(document).ready(function(){
	$('.rtl-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.rtl-slider-nav'
	});
	$('.rtl-slider-nav').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
	   asNavFor: '.rtl-slider',
	   centerMode: false,
	   focusOnSelect: true,
		prevArrow: ".thumb-prev",
   	nextArrow: ".thumb-next",
	});
});

 
