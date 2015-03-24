'use strict';
angular.module('todoV2App')
  .directive('myFooter', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/scripts/directives/myFooter.html',
  };
});