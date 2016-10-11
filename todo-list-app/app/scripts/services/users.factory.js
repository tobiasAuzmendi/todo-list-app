(function() {
  'use strict';

  angular.module('todoListApp')
    .factory('UsersFactory', usersFactory);

  usersFactory.$inject = ['$http', 'ENDPOINT', '$cookies', '$log'];

  function usersFactory($http, ENDPOINT, $cookies, $log) {
    var path = 'users';
    var users = [];
    var factory = {
      getUsers: getUsers,
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser
    };

    return factory;

    function getUsers() {
      return $http.get(ENDPOINT + path)
        .then(function(response) {
          users = response.data;
          return users;
        })
        .catch(function allUsersFailed(error) {
          $log.error('Failed' + error.data);
        });
    }

    function setCurrentUser(user) {
      $cookies.put('currentUser', JSON.stringify(user));
    }

    function getCurrentUser() {
      return JSON.parse($cookies.get('currentUser'));
    }

  }

})();
