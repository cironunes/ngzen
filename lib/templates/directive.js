(function() {
  'use strict';

  angular.module('<%= moduleName %>')
    .directive('<%= name %>', <%= constructorName %>);

  function <%= constructorName %>() {
    var directive = {
      restrict: 'E',
      link: linkFn
    };

    return directive;

    function linkFn($scope, $elem, $attrs) {
      $elem.on('click', function() {
        $elem.addClass('zen');
      });
    }
  }

}());