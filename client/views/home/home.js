// Creating root and resize the window for map view.
var root = this;

// Must create Session variable before use in home events.
Session.set("zoomed", false)

// Resize the window.
root.resize = function() {
    var newHeight = $(root).height();
    $('#map').css("height", newHeight);
}

// Create Commodities Collection.
Deps.autorun(function() {
    Meteor.subscribe("commodities");
    root.Commodities = new Meteor.Collection("commodities");
});

// Create icons for all commodities.
var cornIcon = L.icon({
	iconUrl: 'images/commodities/corn.png',
	iconSize: [35, 35],
	iconAnchor: [35, 35]
});

var wheatIcon = L.icon({
	iconUrl: 'images/commodities/wheat.png',
	iconSize: [35, 35],
	iconAnchor: [35, 35]
});

var coffeeIcon = L.icon({
    iconUrl: 'images/commodities/coffee.png',
    iconSize: [35, 35],
    iconAnchor: [35, 35]
});

var orangeIcon = L.icon({
    iconUrl: 'images/commodities/orange.png',
    iconSize: [35, 35],
    iconAnchor: [35, 35]
});

// Filters helpers.
Template.filters.helpers({
    commodities: function() {
        return Commodities.find();
    }
});

// Directions helpers.
Template.directions.helpers({
    direction: function() {
        if(Session.get("zoomed")){
            return "out of";
        }else{
            return "into";
        }
    }
});

// Commodity helpers.
Template.commodity.helpers({
    activeName: function() {
        return Session.get("activeItem");
    },

    price: function() {
        return "5.00";
    }
});

// Commodity events.
Template.commodity.events({
    'click #corn': function(e) {
        e.preventDefault();
        Session.set("activeItem", "corn");
    },

    'click #wheat': function(e) {
        e.preventDefault();
        Session.set("activeItem", "wheat");
    },

    'click #coffee': function(e) {
        e.preventDefault();
        Session.set("activeItem", "coffee");
        console.log("coffee?");
    },

    'click #orange': function(e) {
        e.preventDefault();
        Session.set("activeItem", "orange");
    }
});


// Home helpers.
Template.home.helpers({
    
});

// Home events.
Template.home.events({
    'click #zoomBtn': function(e) {
        e.preventDefault();
        if (!Session.get("zoomed")) {
            root.map.setView([39.95, -75.19], 12, {animation: true});
            Session.set("zoomed", true);
        }else{
            root.map.setView([20.30, -30.30], 3, {animation: true});
            Session.set("zoomed", false);
        }
    }
});

// Home rendered function.
Template.home.rendered = function () {
	root.resize();

    var layer = new L.StamenTileLayer("watercolor");
    root.map = new L.Map("map", {
        center: new L.LatLng(20.30, -30.30),
        zoom: 3,
        doubleClickZoom: true
    });
    root.map.addLayer(layer);

    var latilang = {}
    
    L.marker([39.95, -75.19], {icon: cornIcon}).addTo(map);
    L.marker([33, 31.5], {icon: cornIcon}).addTo(map);
    L.marker([11, 4.5], {icon: wheatIcon}).addTo(map);
    L.marker([9, 30.5], {icon: wheatIcon}).addTo(map);
    L.marker([30, 22.5], {icon: coffeeIcon}).addTo(map);
    L.marker([22, 50.5], {icon: coffeeIcon}).addTo(map);
    L.marker([21, 39.5], {icon: orangeIcon}).addTo(map);
    L.marker([13, 19.5], {icon: orangeIcon}).addTo(map);
};
