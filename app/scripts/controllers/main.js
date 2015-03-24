'use strict';
angular.module('todoV2App')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [ 
        {text: 'do demo', 'done': false}, 
        {text: 'create presentation', done: true},
        {text:'give presentation', done: false}
    ];

    $scope.newTodoText = '';

    $scope.addTodo = function() {
        $scope.items.push({text: $scope.newTodoText, done: false});
        $scope.newTodoText = '';
    };

    $scope.markDone = function(index) {
        $scope.items[index].done = !$scope.items[index].done;
    };

    $scope.removeTodo = function(index) {
        $scope.items.splice(index, 1);
    };

    $scope.isDone = function(item) {
        if (item.done) {
            return 'todo-done';
        } else {
            return '';
        }        
    };
  });
