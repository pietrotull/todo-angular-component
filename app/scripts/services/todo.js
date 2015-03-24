angular.module('todoV2App')
  .factory('TodoService', function () {
      var todo = {};
      var todos = [ 
        {text: 'do demo', 'done': false}, 
        {text: 'create presentation', done: true},
        {text:'give presentation', done: false}
      ];

      // factory function body that constructs shinyNewServiceInstance
      todo.getAllTodos = function () {
        return todos;
      };

      todo.addNewTodo = function (todoText) {
        todos.push({text: todoText, done: false});
      };

      todo.removeTodo = function (id) {
        todos.splice(id, 1);
      };

      todo.markDone = function(id) {
        console.log('marking done: ' + id);
        todos[id].done = !todos[id].done;
      };

      return todo;
  });