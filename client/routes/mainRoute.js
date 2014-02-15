var HomeController = RouteController.extend({
    template: 'main'
});

Router.map(function () {
    this.route('main', {
        path :  '/',
        controller :  HomeController
    });
});
