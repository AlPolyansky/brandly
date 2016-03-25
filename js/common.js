$(document).ready(function() {
	$('.header_wrap').height($(window).height());
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
	$("#toggle").click(function() {
	  $(this).toggleClass("on");
	});
})