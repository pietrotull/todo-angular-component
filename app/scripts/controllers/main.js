'use strict';
angular.module('todoV2App')
  .controller('MainCtrl', function ($scope, TodoService) {
    $scope.items = TodoService.getAllTodos();
  });
