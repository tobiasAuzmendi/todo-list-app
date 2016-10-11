describe('userSelection controller test', function() {
  var $controller,
    controller,
    UsersFactory,
    $location,
    ctrlArgs;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_$controller_, _$location_, _UsersFactory_) {
    $controller = _$controller_;
    $location = _$location_;
    UsersFactory = _UsersFactory_;

    ctrlArgs = {
      $location: $location,
      userList: [],
      UsersFactory: UsersFactory
    };
    controller = $controller('UserSelectionCtrl', ctrlArgs);
  }));

  describe('default values', function() {
    it('users', function() {
      expect(controller.users).toBeDefined();
      expect(angular.isArray(controller.users));
      expect(controller.users.length).toBe(0);
      expect(controller.users).toEqual([]);
    });

    it('selectedUser', function() {
      expect(controller.selectedUser).toBeDefined();
      expect(controller.selectedUser).toBe('');
    });

  });

  describe('functions', function() {
    it('activate', function() {
      ctrlArgs.userList = ['user_1'];
      controller = $controller('UserSelectionCtrl', ctrlArgs);

      expect(controller.users).toEqual(['user_1']);
    });

    it('showTasks', function() {
      spyOn(UsersFactory, 'setCurrentUser');
      spyOn($location, 'path');
      controller.selectedUser = {
        id: 5
      };

      expect(angular.isFunction(controller.showTasks)).toBeTruthy();

      controller.showTasks();
      expect(UsersFactory.setCurrentUser).toHaveBeenCalled();
      expect(UsersFactory.setCurrentUser).toHaveBeenCalledWith(controller.selectedUser);
      expect($location.path).toHaveBeenCalled();
      expect($location.path).toHaveBeenCalledWith('/todoList/5');
    });

    it('selectUser', function() {
      expect(angular.isFunction(controller.selectUser)).toBeTruthy();

      controller.selectUser('user');
      expect(controller.selectedUser).toBe('user');
    });
  });

});
