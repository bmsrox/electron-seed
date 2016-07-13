'use strict';
angular.module('app', [
  'ngRoute',
  'app.login',
  'app.dashboard'
])
.config(function($routeProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/login'
  });
});
