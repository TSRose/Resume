function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 52.3667,
            lng: 4.8945
        },
    },
    );

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 40.785091,
        lng: 4.968285
    }, {
        lat: 41.084045,
        lng: 4.874256
    }, {
        lat: 40.754932,
        lng: 4.984016
    }];

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