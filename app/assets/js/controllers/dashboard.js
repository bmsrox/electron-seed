'use strict';
angular.module('app.dashboard', [])
.config(function($routeProvider) {
  $routeProvider
  .when('/dashboard',{
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'Index'
  })
})
.controller('DashboardController', DashboardController)

function DashboardController($scope) {

}
DashboardController['$inject'] = ['$scope'];
