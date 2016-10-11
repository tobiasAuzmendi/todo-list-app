describe('app routest test', function() {
  //adding app module to test
  beforeEach(module('todoListApp.routes'));

  it('should map routes to controllers', function() {
    inject(function($route) {
      expect($route.routes['/users'].controller).toBe('UserSelectionCtrl');
      expect($route.routes['/users'].controllerAs).toBe('vm');
      expect($route.routes['/users'].templateUrl).toEqual('app/views/userSelection.view.html');

      expect($route.routes['/todoList/:userId'].controller).toBe('TodoListCtrl');
      expect($route.routes['/todoList/:userId'].controllerAs).toBe('vm');
      expect($route.routes['/todoList/:userId'].templateUrl).toEqual('app/views/todoList.view.html');
 
      // otherwise case
      expect($route.routes[null].redirectTo).toEqual('/users');
    });
  });

});
