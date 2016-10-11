describe('urls constant test', function() {
  var endpoint;

  //adding app module to test
  beforeEach(module('todoListApp'));

  beforeEach(inject(function(ENDPOINT) {
    endpoint = ENDPOINT;
  }));

  it('should be correctly set', function() {
    expect(endpoint).toBe('http://jsonplaceholder.typicode.com/');
  });
});
