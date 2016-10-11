describe('tasks factory test', function() {
  var TasksFactory
    //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(_TasksFactory_) {
    TasksFactory = _TasksFactory_;
  }));

  describe('functions', function() {
    it('getUserTasks', function() {
      var $http;
      var endpoint;
      inject(function(_$http_, ENDPOINT) {
        $http = _$http_;
        endpoint = ENDPOINT;
      });

      expect(angular.isFunction(TasksFactory.getUserTasks)).toBeTruthy();
      spyOn($http, 'get').and.returnValue({
        then: function() {
          return {
            catch: function() {}
          }
        }
      });

      TasksFactory.getUserTasks(5);
      expect($http.get).toHaveBeenCalled();
      expect($http.get).toHaveBeenCalledWith(endpoint + 'todos?userId=5');
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
