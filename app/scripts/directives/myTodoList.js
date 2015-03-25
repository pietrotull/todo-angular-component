'use strict';
angular.module('todoV2App').directive('myTodoList', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/scripts/directives/myTodoList.html',
    controller: function($scope, TodoService) {
      $scope.items = TodoService.getAllTodos();
    }
  };
});