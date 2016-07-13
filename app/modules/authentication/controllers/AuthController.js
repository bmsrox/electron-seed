'use strict';
angular.module('app')
.controller('AuthController', AuthController)

function AuthController($scope) {
  $scope.title = "Login";
}
AuthController['$inject'] = ['$scope'];
