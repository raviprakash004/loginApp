'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$rootScope',
    function ($scope,$rootScope) {
      $scope.username= $rootScope.globals.currentUser.username;
    }])

.controller('AboutController', [
  '$scope', '$http', function($scope, $http) {
    
}])

.controller('ContactController', [
  '$scope', '$http', function($scope, $http) {
    $http.get('locations.json').then(function(response) {
        $scope.locations = response.data;
      });
  }]);
    