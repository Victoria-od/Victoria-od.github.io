$(document).ready(function(){

	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()
	});

	/*to check the form start*/
	function isStrEmpty(str){
		return (str.length == 0);
	}

	$(document).on('keyup', '.validate', function(e){

		if ( isStrEmpty( $(this).val() ) ){
			$(this).addClass('error');        
		} else {
			$(this).removeClass('error');
		}

	});

	$(document).on('click', '#submit-login', function(e){

		e.preventDefault();

		var user_name_input     = $('#user-name'), 
		user_phone_input    = $('#user-phone'),
		user_email_input     = $('#user-email');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim(),
		user_email       	= user_email_input.val().trim(); 

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);
		user_email_input.val(user_email);

		var validated = true;
		$('.error-msg').html('');

		if ( isStrEmpty(user_name) ){
			user_name_input.addClass('error');
			validated = false;
		} else {
			user_name_input.removeClass('error');
		}

		if ( isStrEmpty(user_phone) ){
			user_phone_input.addClass('error');
			validated = false;
		} else {
			user_phone_input.removeClass('error');
		}

		if ( isStrEmpty(user_email) ){
			user_email_input.addClass('error');
			validated = false;
		} else {
			user_email_input.removeClass('error');
		}

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			console.log('User Email: ' + user_email);
			$(this).html('SENT');
		} else {
			$('.error-msg').html('<p style="color:#363636; font-weight: 400;">You have not completed all fields</p>');
		}

	});

	/*to check the form end*/
	/*slider start*/
	/*slider1 start*/
	$('.my-slider').slick({
		'dots': false,
		'infinite': true,
		'arrows':false,
		'speed': 300,
		'draggable': true,
		'slidesToShow': 1,
		'slidesToScroll': 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ] 
});
	$(document).on('click', '.my-slider-prev', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickPrev');
	});

	$(document).on('click', '.my-slider-next', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickNext');
	});
	/*slider1 end*/

	/*slider end*/
	
	$(document).on('click', '#submit', function(e){

		e.preventDefault();

		var email_input     = $('#email');

		var email       	= email_input.val().trim(); 

		email_input.val(email);

		var validated = true;
		$('.error-msg').html('');

		if ( isStrEmpty(email) ){
			email_input.addClass('error');
			validated = false;
		} else {
			email_input.removeClass('error');
		}

		if (validated){
			console.log('User Email: ' + email);
			$(this).html('SENT');
		} else {
			$('.error-msg').html('<p style="color:#fff; font-weight: 400;">You have not completed all fields</p>');
		}

	});
});

$(document).ready(function(){
	function Anchor(active){
		if(active==true){
			var hash=window.location.hash;
			if(hash){
				$("#about a").removeClass("active");
				$("a[href="+hash+"]").addClass("active");
			}
		}
		function AnchorHref(){
			var anchor=$(this);
			if(hash){
				$("#about a").removeClass("active");
				anchor.addClass("active");
			}
			$("html, body").animate({
				scrollTop: $(anchor.attr("href")).offset().top
			}, 500);
		}
		$("a[href*='#']").click(AnchorHref);
	}
	$(Anchor(false));
});﻿
$(document).ready(function() {
	$('.btn-to-portfolio[data-target="portfolio-anchor"]').bind('click.smoothscroll', function(){
		var target=$("#portfolio");
		p_top = $(target).offset().top;
		$("html, body").animate({scrollTop:p_top}, 1000);
		return false;
	})
 });
$(document).ready(function() {
	$('.portfolio-down[data-target="portfolio-gallery"]').bind('click.smoothscroll', function(){
		var target=$(".portfolio-gallery");
		p_top = $(target).offset().top;
		$("html, body").animate({scrollTop:p_top}, 1000);
		return false;
	})
 });

