$(document).ready( function() {

	$(document).on('click', '.tabs-menu li', function() {
		$('.inform-container .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		$('.content[data-tab = '+ tab +']').addClass('active');
	});

$(window).load(function(){
	var map;
	var infoWindowText = $('.info-text').html();
	var mapCenter = {lat: 46.4805745, lng: 30.7411113};
	var marker = new google.maps.Marker({
		position: mapCenter,
		map: map
	}); 

	var mapContainer = $('#map')[0];
	var map = new google.maps.Map(mapContainer, {
		'zoom': 17,
		'center': mapCenter
	});

	var infowindow = new google.maps.InfoWindow({
		content: infoWindowText
	});

	infowindow.open(map, marker);	

	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
});
});
