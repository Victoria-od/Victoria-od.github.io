$(document).ready(function(){

	var $menu = $("#second-header-block");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 300 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 300 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
        });//scroll

	$('.menu').click(function(e) {
		e.preventDefault();
		$('.menu_general').toggle('active');
	});

	function Anchor(active){
		if(active==true){
			var hash=window.location.hash;
			if(hash){
				$("#home a").removeClass("active");
				$("a[href="+hash+"]").addClass("active");
			}
		}
		function AnchorHref(){
			var anchor=$(this);
			if(hash){
				$("#home a").removeClass("active");
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

	/*1*/
	$(document).on('click', '#submit_fa', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa'), 
		user_phone_input    = $('#user_phone_fa');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(this).html('Отправлено');
		} else {
			$('.error-msg').html('');
		}

	});

	$(document).on('click', '#submit_fa2', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa2'), 
		user_phone_input    = $('#user_phone_fa2');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(this).html('Отправлено');
		} else {
			$('.error-msg_fa').html('');
		}

	});

	/*3*/
	$(document).on('click', '#submit_fa3', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa3'), 
		user_phone_input    = $('#user_phone_fa3');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(this).html('Отправлено');
		} else {
			$('.error-msg').html('').fadeTo(10000, 0);
		}

	});

	/*4*/
	$(document).on('click', '#submit_fa4', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa4'), 
		user_phone_input    = $('#user_phone_fa4');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(this).html('Отправлено');
		} else {
			$('.error-msg').html('');
		}

	});
	/*5*/
	$(document).on('click', '#submit-appointment_free', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa5'), 
		user_phone_input    = $('#user_phone_fa5');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(".modal#modal_call_back ul").empty();
			$(".modal#modal_call_back .header_1").text('Спасибо!');
			$(".modal#modal_call_back p").text('Мы свяжемся с вами в течении часа для уточнения деталей.');
			
		} else {
			$('.error-msg').html('');
		}

	});
	/*6*/
	$(document).on('click', '#submit_fa6', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa6'), 
		user_phone_input    = $('#user_phone_fa6');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(".modal#modal_call_back6 ul").empty();
			$(".modal#modal_call_back6 .header_1").text('Спасибо!');
			$(".modal#modal_call_back6 p").text('Мы свяжемся с вами в течении часа для уточнения деталей.');
			
		} else {
			$('.error-msg').html('');
		}

	});
	/*7*/
	$(document).on('click', '#submit_fa7', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa7'), 
		user_phone_input    = $('#user_phone_fa7');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(".modal#modal_call_back7 ul").empty();
			$(".modal#modal_call_back7 .header_1").text('Спасибо!');
			$(".modal#modal_call_back7 p").text('Мы свяжемся с вами в течении часа для уточнения деталей.');
			
		} else {
			$('.error-msg').html('');
		}

	});
	/*8*/
	$(document).on('click', '#submit_fa8', function(e){

		e.preventDefault();

		var user_name_input     = $('#user_name_fa8'), 
		user_phone_input    = $('#user_phone_fa8');

		var user_name        	= user_name_input.val().trim(), 
		user_phone      	= user_phone_input.val().trim();

		user_name_input.val(user_name);
		user_phone_input.val(user_phone);

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

		if (validated){
			console.log('User Name: ' + user_name);
			console.log('Your Phone: ' + user_phone);
			$(".modal#modal_call_back8 ul").empty();
			$(".modal#modal_call_back8 .header_1").text('Спасибо!');
			$(".modal#modal_call_back8 p").text('Мы свяжемся с вами в течении часа для уточнения деталей.');
			
		} else {
			$('.error-msg').html('');
		}

	});
	/*to check the form end*/
	/*slider start*/
	$('.feedback-slider').slick({
		'dots': true,
		'arrows': false, 
		'draggable': true,
		'autoplay': true, 
		'autoplaySpeed': 3000, 
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
		]
	});
	/*slider end*/

	/*FancyBox start*/

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false, 

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});

});
/*FancyBox end*/

$(document).ready(function(){
	$(document).on('click', '.tabs-menu li', function(){
		$('.q_block .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		$('.tab-content[data-tab = '+ tab +']').addClass('active');
	});
});

$(document).ready(function(){
	$.mask.definitions['d'] = '[0-9]';
	delete $.mask.definitions['9'];
	$('.phone-input').mask('(ddd)ddd-dd-dd');
});

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

$(document).ready(function(){
	$('.modal_call_back6').css('margin-top', '77px');
});
$(document).ready(function(){
	$('.modal_call_back7').css('margin-top', '39px');
});