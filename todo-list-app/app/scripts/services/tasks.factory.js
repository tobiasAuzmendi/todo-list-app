(function() {
  'use strict';

  angular.module('todoListApp')
    .factory('TasksFactory', tasksFactory);

  tasksFactory.$inject = ['$http', 'ENDPOINT', '$log'];

  function tasksFactory($http, ENDPOINT, $log) {
    var path = 'todos?userId=';
    var factory = {
      getUserTasks: getUserTasks,
      getNewTask: getNewTask
    };

    return factory;

    function getUserTasks(userId) {
      return $http.get(ENDPOINT + path + userId)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          $log.error('Failed' + error.data);
        });
    }

    function getNewTask(userId) {
      return {
        completed: false,
        title: '',
        userId: userId
      }
    }

  }

})();
