(function() {
  'use strict';

  angular
    .module('todoListApp')
    .controller('TodoListCtrl', todoListCtrl);

  todoListCtrl.$inject = ['todoList', 'TasksFactory', 'UsersFactory'];

  function todoListCtrl(todoList, TasksFactory, UsersFactory) {
    var vm = this;

    angular.extend(vm, {
      tasks: [],
      newTask: {},
      userName: '',
      action: 'showAll',
      addTask: addTask,
      removeTask: removeTask
    });

    initialize();

    function initialize() {
      var currentUser = UsersFactory.getCurrentUser();
      vm.tasks= todoList;
      vm.newTask= TasksFactory.getNewTask(currentUser.id);
      vm.userName = currentUser.name;
    }

    function addTask(task) {
      vm.tasks.push(task);
      vm.newTask = TasksFactory.getNewTask(UsersFactory.getCurrentUser().id);
    }

    function removeTask(task) {
      vm.tasks.splice(task, 1);
    }
  }

})();
