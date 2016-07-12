angular.module('app', ['ngRoute'])
.config( function($routeProvider) {
  $routeProvider
  .when('/login',{
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/index',{
    templateUrl: 'views/dashboard.html',
    controller: 'DashboadController'
  })
  .otherwise({
    redirectTo: '/login'
  })
})
.controller('LoginController', LoginController)
.controller('DashboadController', DashboadController)

function LoginController($scope) {

}
LoginController['$inject'] = ['$scope'];

function DashboadController($scope) {

}

DashboadController['$inject'] = ['$scope'];
