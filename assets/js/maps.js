function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 52.3676,
            lng: 4.9041
        },
    },
    );

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        {lat: 37.8136, lng: 144.9631}, 
        {lat: 52.5200, lng: 13.4050}, 
        {lat: 52.3676, lng: 4.9041}
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new markerCluster(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}