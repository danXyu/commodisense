// Configure router for commodisense navigation

// Basic configuration
Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        'includesHeader': { to: 'includesHeader' },
        'includesFooter': { to: 'includesFooter' }
    },

    unload: function() {
	},

	onBeforeRun: function() {
	},

	before: function() {
	},

	after: function() {
	},

	onAfterRun: function() {
	}
});

// Route configuration
Router.map(function() {
	this.route('home', {path: '/'});
});