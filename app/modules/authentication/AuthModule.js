'use strict';
angular.module('app')
.config(function($routeProvider) {
  $routeProvider
  .when('/login',{
    templateUrl: 'modules/authentication/views/login.html',
    controller: 'AuthController',
    controllerAs: 'Auth'
  })
})
