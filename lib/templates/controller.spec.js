describe('Controller: <%= name %>', function() {
  var ctrl, scope;

  beforeEach(module('<%= moduleName %>'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('<%= name %>', {
      $scope: scope
    });
  }));

  it('should have a bar property equal to 42', function() {
    expect(ctrl.foo).toBe(42);
  });

  describe('#bar', function() {
    it('should be 43', function() {
      ctrl.bar();
      expect(ctrl.foo).toBe(43);
    });
  });
});