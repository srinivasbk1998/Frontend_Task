app.controller('MyController', function($scope) {
    $scope.message = 'Hello, world!';
    
    $scope.sayHello = function() {
      alert($scope.message);
    };
  });
  