(function() {
  'use strict';

  function <%= constructorName %>() {
    var service = {
      foo: foo,
      bar: 42
    };

    return service;

    function foo() {
      return 42;
    }
  }

  angular.module('<%= moduleName %>')
    .factory('<%= name %>', <%= constructorName %>);
}());