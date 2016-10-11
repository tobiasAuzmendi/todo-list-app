(function() {
  'use strict';

  angular
    .module('todoListApp')
    .directive('perfectScrollbar', perfectScrollbar);

  function perfectScrollbar() {
    var directive = {
      restrict: 'A',
      scope: {
        array: '=',
        container: '@'
      },
      link: linkFun
    };

    return directive;

    function linkFun(scope, element) {
      if (scope.array && scope.array.length) {
        // I'm using document.querySelector instead of angular.element
        // to avoid a browser compatibility problem.
        var container = document.querySelector('.' + scope.container);
        Ps.destroy(container);
        Ps.initialize(container, {
          wheelSpeed: 2,
          wheelPropagation: false,
          minScrollbarLength: 20,
          suppressScrollX: true
        });
      }
    }
  }
})();
