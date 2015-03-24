'use strict';
angular.module('todoV2App')
  .controller('MainCtrl', function ($scope, TodoService) {

    $scope.items = TodoService.getAllTodos();
/*
$scope.newTodoText = '';
    $scope.addTodo = function() {
        $scope.items.push({text: $scope.newTodoText, done: false});
        $scope.newTodoText = '';
    };
*/
    $scope.markDone = function(index) {
        $scope.items[index].done = !$scope.items[index].done;
    };

    $scope.removeTodo = function(index) {
        TodoService.removeTodo(index);
        //$scope.items = TodoService.getAllTodos();      
    };

    $scope.isDone = function(item) {
        if (item.done) {
            return 'todo-done';
        } else {
            return '';
        }        
    };
  });
