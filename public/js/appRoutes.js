angular.module('appRoutes', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .state('pouch', {
            url: "/pouch",
            templateUrl: 'views/pouch.html',
            controller: 'PouchController'
        })
        .state('others', {
            url: "/others",
            templateUrl: 'views/others.html',
            controller: 'OthersController'
        });
        $urlRouterProvider.otherwise("home");
}]);
