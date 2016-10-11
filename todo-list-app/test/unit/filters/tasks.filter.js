describe('tasks filter test', function() {
  var $filter,
    array,
    result;

  beforeEach(function() {
    module('todoListApp');
    array = [{ completed: true }, { completed: false }, { completed: true }];

    inject(function(_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should filter as expect with showDone as filter option', function() {
    result = $filter('TasksFilter')(array, 'showDone');
    expect(result).toEqual([{ completed: true }, { completed: true }]);
  });

  it('should filter as expect with showAll as filter option', function() {
    result = $filter('TasksFilter')(array, 'showAll');
    expect(result).toEqual([{ completed: true }, { completed: false }, { completed: true }]);
  });

  it('should filter as expect with showPending as filter option', function() {
    result = $filter('TasksFilter')(array, 'showPending');
    expect(result).toEqual([{ completed: false }]);
  });

});
