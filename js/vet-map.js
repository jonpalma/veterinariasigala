var map;
$(document).ready(function () {
google.maps.event.addDomListener(window, 'load', initialize);


});

function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(28.632086, -106.075845),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    map = new google.maps.Map(map_canvas, map_options);
	
	var markerNorte = new google.maps.Marker({
        position: new google.maps.LatLng(28.723724, -106.126651),
        map: map,
        title: 'Veterinaria Sigala'
    });
	
	var markerCentro = new google.maps.Marker({
        position: new google.maps.LatLng(28.632086, -106.075845),
        map: map,
        title: 'Veterinaria Sigala'
    });
	
	var markerJuventud = new google.maps.Marker({
        position: new google.maps.LatLng(28.651309, -106.131523),
        map: map,
        title: 'Veterinaria Sigala'
    });
}

function moveToNorte() {
	map.panTo(new google.maps.LatLng(28.723724, -106.126651));
}

function moveToCentro() {
	map.panTo(new google.maps.LatLng(28.632086, -106.075845));
}

function moveToJuventud() {
	map.panTo(new google.maps.LatLng(28.651309, -106.131523));
}