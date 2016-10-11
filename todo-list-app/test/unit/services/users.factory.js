describe('users factory test', function() {
  var TasksFactory;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_UsersFactory_) {
    UsersFactory = _UsersFactory_;
  }));

  describe('functions', function() {
    it('getUsers', function() {
      var $http;
      var endpoint;
      inject(function(_$http_, ENDPOINT) {
        $http = _$http_;
        endpoint = ENDPOINT;
      });

      expect(angular.isFunction(UsersFactory.getUsers)).toBeTruthy();
      spyOn($http, 'get').and.returnValue({
        then: function() {
          return {
            catch: function() {}
          }
        }
      });

      UsersFactory.getUsers();
      expect($http.get).toHaveBeenCalled();
      expect($http.get).toHaveBeenCalledWith(endpoint + 'users');
    });

    it('setCurrentUser', function() {
      var $cookies;
      inject(function(_$cookies_) {
        $cookies = _$cookies_;
      });
      expect(angular.isFunction(UsersFactory.setCurrentUser)).toBeTruthy();

      UsersFactory.setCurrentUser({ name: 'an userName' });
      expect(angular.equals({ name: 'an userName' }, JSON.parse($cookies.get('currentUser')))).toBeTruthy();
    });

    it('getCurrentUser', function() {
      expect(angular.isFunction(UsersFactory.getCurrentUser)).toBeTruthy();

      UsersFactory.setCurrentUser({ name: 'another userName' });
      expect(angular.equals(UsersFactory.getCurrentUser(), { name: 'another userName' })).toBeTruthy();
    });
  });

});
