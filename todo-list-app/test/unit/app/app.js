describe('app module definition test', function() {

  it('should be correctly initialized', function() {
    var app = angular.module('todoListApp');
    var requires = ['todoListApp.routes', 'ngCookies'];

    expect(app.name).toBe('todoListApp');

    app.requires.forEach(function(require, index) {
      expect(require).toBe(requires[index]);
    });
  });

});
