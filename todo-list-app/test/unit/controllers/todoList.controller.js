describe('servicesChecker controller test', function() {
  var $controller,
    controller,
    UsersFactory,
    TasksFactory;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_$controller_, _TasksFactory_, _UsersFactory_) {
    $controller = _$controller_;
    TasksFactory = _TasksFactory_;
    UsersFactory = _UsersFactory_;

    spyOn(UsersFactory, 'getCurrentUser').and.returnValue({ id: 1, name: 'an userName' });
  }));

  beforeEach(function() {
    controller = $controller('TodoListCtrl', {
      todoList: [],
      TasksFactory: TasksFactory,
      UsersFactory: UsersFactory
    });
  });

  describe('default values', function() {
    it('tasks', function() {
      expect(controller.tasks).toBeDefined();
      expect(angular.isArray(controller.tasks));
      expect(controller.tasks.length).toBe(0);
    });

    it('userName', function() {
      expect(controller.userName).toBeDefined();
      expect(controller.userName).toBe('an userName');
    });

    it('newTask', function() {
      expect(controller.newTask).toBeDefined();
      expect(angular.equals(controller.newTask, {
        completed: false,
        title: '',
        userId: 1
      })).toBeTruthy();
    });

    it('action', function() {
      expect(controller.action).toBeDefined();
      expect(controller.action).toBe('showAll');
    });

  });

  describe('functions', function() {
    beforeEach(function() {
      spyOn(TasksFactory, 'getNewTask').and.returnValue('the new task');
    });

    it('addTask', function() {
      expect(angular.isFunction(controller.addTask)).toBeTruthy();

      controller.addTask('an argument task');
      expect(controller.tasks[0]).toBe('an argument task');
      expect(controller.newTask).toBe('the new task');
      expect(TasksFactory.getNewTask).toHaveBeenCalled();
      expect(UsersFactory.getCurrentUser).toHaveBeenCalled();
    });

    it('removeTask', function() {
      expect(angular.isFunction(controller.removeTask)).toBeTruthy();

      controller.addTask('an argument task');
      expect(controller.tasks.length).toBe(1);
      controller.removeTask();
      expect(controller.tasks.length).toBe(0);
    });
  });

});
