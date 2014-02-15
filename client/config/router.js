// Configure router for commodisense navigation

// Basic configuration
Router.configure({
	autoRender: false,
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        'includesHeader': { to: 'includesHeader' },
        'includesFooter': { to: 'includesFooter' }
    }

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

// Router mapping
Router.map(function() {
	this.route('mainpage', {path: '/'});
});