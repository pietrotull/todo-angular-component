'use strict';
angular.module('todoV2App')
  .directive('myAddTodoForm', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/scripts/directives/myAddTodoForm.html',
    controller: function($scope, TodoService) {
        console.log('loaded');
        $scope.newTodoText = '';
        $scope.addTodo = function() {
            // $scope.items.push({text: $scope.newTodoText, done: false});
            console.log('adding todo: ', $scope.newTodoText);
            TodoService.addNewTodo($scope.newTodoText);
            $scope.newTodoText = '';
        };
    }
  };
});