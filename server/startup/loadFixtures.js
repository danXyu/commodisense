// Creating the Commodities Collection.
Commodities = new Meteor.Collection('commodities');

// Creating the Markers Collection.
Markers = new Meteor.Collection('markers');

// Fixtures for Commodities.
if (Commodities.find().count() === 0) {
	Commodities.insert({
		name: 'corn'
	});

	Commodities.insert({
		name: 'wheat'
	});

	Commodities.insert({
		name: 'coffee'
	});

	Commodities.insert({
		name: 'orange'
	});

	Markers.insert({
		
	});
};





Meteor.publish('commodities', function() {
	return Commodities.find();
})