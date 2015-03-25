'use strict';
angular.module('todoV2App')
  .directive('myTodo', function () {
  return {
    restrict: 'E',
    scope: {
      todo:'=',
      index: '='
    },
    templateUrl: '/scripts/directives/myTodo.html',
    controller: function ($scope, TodoService) {

      $scope.markDone = function () {
        TodoService.markDone($scope.index)
      };

      $scope.removeTodo = function (index) {
        TodoService.removeTodo($scope.index)
      };

      $scope.isDone = function () {
        if ($scope.todo.done) {
          return 'todo-done';
        } else {
          return '';
        }  
      };
    }
  };
});