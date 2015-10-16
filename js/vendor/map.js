function initializeMaps() {
    var latlng = new google.maps.LatLng(30.72,76.81);
    var myOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("gmaps"),myOptions);
    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (var driver in mapRecords) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(mapRecords[driver].latitude,mapRecords[driver].longitude),
            animation:google.maps.Animation.BOUNCE,
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, driver) {
            return function() {
                infowindow.setContent(mapRecords[driver].username);
                infowindow.open(map, marker);
            }
        })(marker, driver));
    }
}
