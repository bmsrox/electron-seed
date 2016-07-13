'use strict';
angular.module('app')
.controller('DashboardController', DashboardController)

function DashboardController($scope) {
  $scope.title = "Dashboard";
}
DashboardController['$inject'] = ['$scope'];
