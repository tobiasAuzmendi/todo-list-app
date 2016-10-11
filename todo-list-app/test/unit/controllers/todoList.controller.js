describe('todoList controller test', function() {
  var $controller,
    controller,
    UsersFactory,
    TasksFactory,
    ctrlArgs;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_$controller_, _TasksFactory_, _UsersFactory_) {
    $controller = _$controller_;
    TasksFactory = _TasksFactory_;
    UsersFactory = _UsersFactory_;

    spyOn(UsersFactory, 'getCurrentUser').and.returnValue({ id: 1, name: 'an userName' });
    
    ctrlArgs = {
      todoList: [],
      TasksFactory: TasksFactory,
      UsersFactory: UsersFactory
    };
    controller = $controller('TodoListCtrl', ctrlArgs);
  }));

  describe('default values', function() {
    it('tasks', function() {
      expect(controller.tasks).toBeDefined();
      expect(angular.isArray(controller.tasks));
      expect(controller.tasks.length).toBe(0);
      expect(controller.tasks).toEqual([]);
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

    it('activate', function() {
      controller = $controller('TodoListCtrl', ctrlArgs);

      expect(UsersFactory.getCurrentUser).toHaveBeenCalled();
      expect(TasksFactory.getNewTask).toHaveBeenCalled();
      expect(TasksFactory.getNewTask).toHaveBeenCalledWith(1);
      expect(controller.tasks).toEqual([]);
      expect(controller.newTask).toBe('the new task');
      expect(controller.userName).toBe('an userName');
    });

    it('addTask', function() {
      expect(angular.isFunction(controller.addTask)).toBeTruthy();

      controller.addTask('an argument task');
      expect(controller.tasks[0]).toBe('an argument task');
      expect(controller.newTask).toBe('the new task');
      expect(TasksFactory.getNewTask).toHaveBeenCalled();
      expect(TasksFactory.getNewTask).toHaveBeenCalledWith(1);
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
