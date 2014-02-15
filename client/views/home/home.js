// Creating root system for map serving.
var root = this;

// Resize the window and map view.
root.resize = function() {
	var newHeight = $(root).height();
	$('#map').css("height", newHeight);
}

// Create custom icon.
var myIcon = L.icon({
	iconUrl: 'images/commodities/corn.png',
	iconSize: [40, 40],
	iconAnchor: [22, 40]
});

var nextIcon = L.icon({
	iconUrl: 'images/commodities/cocoa.png',
	iconSize: [40, 40],
	iconAnchor: [22, 40]
});

// Home helpers.
Template.home.helpers({

});

// Home events.
Template.home.events({

});

// Home rendered function.
Template.home.rendered = function () {
	root.resize();

    var layer = new L.StamenTileLayer("watercolor");
    root.map = new L.Map("map", {
        center: new L.LatLng(50.5, 30.5),
        zoom: 10,
        doubleClickZoom: true
    });
    root.map.addLayer(layer);

    var latilang = {}
    
    L.marker([50.5, 30.5], {icon: myIcon}).addTo(map);
    L.marker([70, 30.5], {icon: nextIcon}).addTo(map);
};
