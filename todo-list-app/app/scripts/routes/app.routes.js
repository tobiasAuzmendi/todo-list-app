(function() {
  'use strict';

  var routes = angular.module('todoListApp.routes', ['ngRoute'])

  routes.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/users', {
          templateUrl: 'app/views/userSelection.view.html',
          controller: 'UserSelectionCtrl',
          controllerAs: 'vm',
          resolve: {
            userList: function(UsersFactory) {
              return UsersFactory.getUsers();
            }
          }
        })
        .when('/todoList/:userId', {
          templateUrl: 'app/views/todoList.view.html',
          controller: 'TodoListCtrl',
          controllerAs: 'vm',
          resolve: {
            todoList: function(TasksFactory, $route) {
              return TasksFactory.getUserTasks($route.current.params.userId);
            }
          }
        })
        .otherwise({
          redirectTo: '/users'
        });

      $locationProvider.html5Mode(false);
    }
  ]);
})();
