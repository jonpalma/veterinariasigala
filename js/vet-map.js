$(document).ready(function () {

function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(28.632086, -106.075845),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(map_canvas, map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.632086, -106.075845),
        map: map,
        title: 'Veterinaria Sigala'
    });
    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);


});