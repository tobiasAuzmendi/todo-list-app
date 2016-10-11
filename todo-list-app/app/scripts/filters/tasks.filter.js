(function() {
  'use strict';

  angular.module('todoListApp')
    .filter('TasksFilter', tasksFilter);

  function tasksFilter() {
    return function(tasks, action) {
      if (action == 'showAll') {
        return tasks;
      }
      var returnValue = [];
      var completed = action === 'showDone' ? true : false;
      for (var i = 0; i < tasks.length; i++) {
        if(tasks[i].completed === completed) {
          returnValue.push(tasks[i]);
        }
      }
      return returnValue;
    }
  }

})();
