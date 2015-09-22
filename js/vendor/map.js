function initializeMaps() {
    var latlng = new google.maps.LatLng(30.72,76.81);
    var myOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),myOptions);
    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (var driver in mapresponse) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(mapresponse[driver].current_location_latitude,mapresponse[driver].current_location_longitude),
            animation:google.maps.Animation.BOUNCE,
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, driver) {
            return function() {
                infowindow.setContent(mapresponse[driver].user_name);
                infowindow.open(map, marker);
            }
        })(marker, driver));
    }
}
google.maps.event.addDomListener(window, 'load', initializeMaps);
