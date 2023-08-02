// app.js
var myApp = angular.module('myApp', []);

// Define the directive
myApp.directive('myDirective', function() {
    return {
        restrict: 'E',
        template: '<p>Hello from myDirective!</p>'
    };
});

// Define the controller
myApp.controller('MyController', function($scope) {
    $scope.message = 'Hello from MyController!';
});
