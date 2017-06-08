 $(document).ready(function() {
 	var $menu = $("#header_navigation");

 	$(window).scroll(function(){
 		if ( $(this).scrollTop() > 300 && $menu.hasClass("default") ){
 			$menu.removeClass("default").addClass("fixed");
 		} else if($(this).scrollTop() <= 300 && $menu.hasClass("fixed")) {
 			$menu.removeClass("fixed").addClass("default");
 		}
        });//scroll

 	$('.menu-bar').click(function(e) {
 		e.preventDefault();
 		$('.menu_general').toggle('active');
 	});

 	function Anchor(active){
 		if(active==true){
 			var hash=window.location.hash;
 			if(hash){
 				$("#for_children a").removeClass("active");
 				$("a[href="+hash+"]").addClass("active");
 			}
 		}
 		function AnchorHref(){
 			var anchor=$(this);
 			if(hash){
 				$("#for_children a").removeClass("active");
 				anchor.addClass("active");
 			}
 			$("html, body").animate({
 				scrollTop: $(anchor.attr("href")).offset().top
 			}, 500);
 		}
 		$("a[href*='#']").click(AnchorHref);
 	}
 	$(Anchor(false));

 	$('input').focus(function(){
 		$(this).css("font-weight", '700');
 	});

 	$('input').blur(function(){
 		$(this).css("font-weight", '400');
 	});
 	/*phone mask*/

 	$.mask.definitions['~'] = "[+-]";
 	$(".phone").mask("+380 99 105 05 75");
 	$("input").blur(function() {
 		$("#info").html("Unmasked value: " + $(this).mask());
 	}).dblclick(function() {
 		$(this).unmask();
 	});
 });
 var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton            // give $().bootstrapBtn the Bootstrap functionality



/*hamburger*/
$('#nav-icon1').click(function(){
	$(this).toggleClass('open');
	$('.menu-bar ul').toggle(500);
	$('.menu-bar ul li').css({'display':'block','text-align':'center'});
});

$('.menu-bar ul li a').click(function(){
	$('#nav-icon1').toggleClass('open');
	if (window.matchMedia("(max-width: 1200px)").matches) {
		$('.menu-bar ul').toggle(500);
	}
});

/*hamburger end*/


$('.image-link').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}
});

$(document).ready(function() {
	$('.feedback_slider').slick({
		'arrows': false,
		'draggable': true,
		//'autoplay': true,
		'slidesToShow': 1,
		'slidesToScroll': 1,
		'dots': true,
		'adaptiveHeight': true,
		//'autoplaySpeed': 3000
	});
	$(document).on('click', '.feedback_slider-prev', function(e){
		e.preventDefault();
		$('.feedback_slider').slick('slickPrev');
	});

	$(document).on('click', '.feedback_slider-next', function(e){
		e.preventDefault();
		$('.feedback_slider').slick('slickNext');
	});
});