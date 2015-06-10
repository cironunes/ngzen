(function() {
  'use strict';

  angular.module('<%= moduleName %>')
    .factory('<%= name %>', <%= constructorName %>);

  <%= constructorName %>.$inject = [];

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
}());