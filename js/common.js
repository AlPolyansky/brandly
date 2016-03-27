$(document).ready(function() {
	var windowHeight,procent,numberHeight;

	numberHeight = 20;

	$(".top_menu").clone().appendTo("#mobile_menu");
	$("#mobile_menu").mmenu({
		extensions : ['widescreen' , 'theme-white', 'effect-menu-slide' , 'pagedim-black'],
		navbar: {
			title: "Menu"
		}
	});
	
	$("#toggle").click(function() {
	  $(this).addClass("on");
	});


	var api = $("#mobile_menu").data("mmenu");
	api.bind("closed", function(){
		$("#toggle").removeClass("on")
	})

	$("#toggle").on("click",function(){
		$("#toggle").removeClass("button_active").stop();
		$(this).addClass("button_active");
		
	})


	$('.slider').flickity({
	      cellAlign: 'left',
	      contain: true,
	      prevNextButtons: false,
	      autoPlay: 7500,
	      pauseAutoPlayOnHover: true,
	      freeScroll: false,
	      wrapAround: true,
	      setGallerySize: false,
	    });
	

    
	$('#trends_slider').flickity({
	      	contain: true,
	      	prevNextButtons: true,
	      	draggable: !Modernizr.touch,
	      	//prevNextButtons: false
    	});

	if(!Modernizr.touch){
		$("#trends_slider button").hide()
	}

	//var imgHeight = $(".trends img").height()
	//var topArrow = imgHeight / 2


	//$("#trends .is-selected button").css("top", topArrow)


  


   

	function elemHeight(num){
		windowHeight = $(window).height()
		pocent = windowHeight / 100 * num
		if($(window).width() <= 768){
			$(".slider").height(windowHeight - pocent)
		}
		else{
			$(".slider").height(windowHeight)
		}
	}


	elemHeight(numberHeight)





	$(window).resize(function(){
		elemHeight(numberHeight)
	})

	$(window).load(function(){
		$(".loader_wrap").delay(400).fadeOut("slow");
	})
		
	
})