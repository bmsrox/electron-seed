'use strict';
angular.module('app.login', [])
.config(function($routeProvider) {
  $routeProvider
  .when('/login',{
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'Login'
  })
})
.controller('LoginController', LoginController)

function LoginController($scope) {

}
LoginController['$inject'] = ['$scope'];
