describe('perfect scrollbar directive test', function() {
  var $compile;
  var $rootScope;

  beforeEach(function() {
    module('todoListApp');
    inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('should call the Ps methods', function() {
    spyOn(Ps, 'initialize');
    spyOn(Ps, 'destroy');

    document.body.innerHTML += '<div class="user-selection"><input perfect-scrollbar array="[1]" container="user-selection"></input></div>';
    $compile(document.body.innerHTML)($rootScope);
    $rootScope.$digest();
    var elem = document.querySelector('.user-selection');

    expect(Ps.destroy).toHaveBeenCalled();
    expect(Ps.destroy).toHaveBeenCalledWith(elem);

    expect(Ps.initialize).toHaveBeenCalled();
    expect(Ps.initialize).toHaveBeenCalledWith(elem, {
      wheelSpeed: 2,
      wheelPropagation: false,
      minScrollbarLength: 20,
      suppressScrollX: true
    });
  });

});
