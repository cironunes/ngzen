(function() {
  'use strict';

  angular.module('<%= moduleName %>')
    .controller('<%= name %>', <%= constructorName %>);

  <%= constructorName %>.$inject = [];

  function <%= constructorName %>() {
    var vm = this;

    vm.foo = 42;

    vm.bar = function() {
      vm.foo += 1;
    }
  }
}());