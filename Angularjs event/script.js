// AngularJS module and controller definition
angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.showText = true;
    
    // Function to toggle the visibility of the text
    $scope.toggleText = function() {
      $scope.showText = !$scope.showText;
    };
    
    // Function to disable the input field
    $scope.disableInput = function() {
      $scope.inputValue = '';
    };
  });
