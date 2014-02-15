Meteor.publish('comods', function() {
	return Comods.find();
});