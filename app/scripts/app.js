'use strict';

/**
 * @ngdoc overview
 * @name todoV2App
 * @description
 * # todoV2App
 *
 * Main module of the application.
 */
angular
  .module('todoV2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
