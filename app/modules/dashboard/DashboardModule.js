'use strict';
angular.module('app')
.config(function($routeProvider) {
  $routeProvider
  .when('/dashboard',{
    templateUrl: 'modules/dashboard/views/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'Dashboard'
  })
})
