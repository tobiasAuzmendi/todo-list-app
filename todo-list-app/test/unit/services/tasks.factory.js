describe('tasks factory test', function() {
  var TasksFactory,
  $http;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_TasksFactory_, _$http_) {
    TasksFactory = _TasksFactory_;
    $http=_$http_;
  }));

  describe('functions', function() {
    it('getUserTasks', function() {
      spyOn($http,'get').and.returnValue( { then: function() { return { catch: function(){} } } });
      expect(angular.isFunction(TasksFactory.getUserTasks)).toBeTruthy();

      TasksFactory.getUserTasks();
      expect($http.get).toHaveBeenCalled();
    });

    it('getNewTask', function() {
      expect(angular.isFunction(TasksFactory.getNewTask)).toBeTruthy();

      var retValue = TasksFactory.getNewTask(1);
      expect(angular.equals(retValue, {
        completed: false,
        title: '',
        userId: 1
      })).toBeTruthy();
    });
  });

});
