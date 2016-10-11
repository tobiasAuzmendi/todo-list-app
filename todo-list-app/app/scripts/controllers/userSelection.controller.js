(function() {
  'use strict';

  angular
    .module('todoListApp')
    .controller('UserSelectionCtrl', userSelectionCtrl);

  userSelectionCtrl.$inject = ['$location', 'userList', 'UsersFactory'];

  function userSelectionCtrl($location, userList, UsersFactory) {
    var vm = this;

    angular.extend(vm, {
      users: [],
      selectedUser: '',
      showTasks: showTasks,
      selectUser: selectUser
    });

    initialize();

    function initialize() {
      vm.users = userList;
    }

    function showTasks() {
      UsersFactory.setCurrentUser(vm.selectedUser);
      $location.path('/todoList/' + vm.selectedUser.id);
    }

    function selectUser(user) {
      vm.selectedUser = user;
    }
  }

})();
