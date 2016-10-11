describe('userSection controller test', function() {
  var $controller,
    controller,
    UsersFactory,
    $location;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_$controller_, _$location_, _UsersFactory_) {
    $controller = _$controller_;
    $location = _$location_;
    UsersFactory = _UsersFactory_;
  }));

  beforeEach(function() {
    controller = $controller('UserSelectionCtrl', {
      $location : $location,
      userList : [],
      UsersFactory : UsersFactory
    });
  });

  describe('default values', function() {
    it('users', function() {
      expect(controller.users).toBeDefined();
      expect(angular.isArray(controller.users));
      expect(controller.users.length).toBe(0);
    });

    it('selectedUser', function() {
      expect(controller.selectedUser).toBeDefined();
      expect(controller.selectedUser).toBe('');
    });

  });

  describe('functions', function() {
    it('showTasks', function() {
      spyOn(UsersFactory, 'setCurrentUser');
      spyOn($location, 'path');
      
      expect(angular.isFunction(controller.showTasks)).toBeTruthy();

      controller.showTasks();
      expect(UsersFactory.setCurrentUser).toHaveBeenCalled();
      expect($location.path).toHaveBeenCalled();
    });

    it('selectUser', function() {
      expect(angular.isFunction(controller.selectUser)).toBeTruthy();

      controller.selectUser('user');
      expect(controller.selectedUser).toBe('user');
    });
  });

});
