// Step 1: Create an AngularJS module and inject the 'ngRoute' module.
var myApp = angular.module('myApp', ['ngRoute']);

// Step 2: Configure the routes using $routeProvider.
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

// Step 3: Create controllers for each route.
myApp.controller('HomeController', function ($scope) {
    $scope.message = 'Welcome to the Home page!';
});

myApp.controller('AboutController', function ($scope) {
    $scope.message = 'This is the About page.';
});

myApp.controller('ContactController', function ($scope) {
    $scope.message = 'Contact us at contact@example.com';
});
