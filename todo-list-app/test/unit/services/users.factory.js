describe('servicesChecker controller test', function() {
  var TasksFactory,
    $cookies;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_UsersFactory_, _$cookies_) {
    UsersFactory = _UsersFactory_;
    $cookies = _$cookies_;
  }));

  describe('functions', function() {
    it('getUsers', function() {
      expect(angular.isFunction(UsersFactory.getUsers)).toBeTruthy();
    });

    it('setCurrentUser', function() {
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
