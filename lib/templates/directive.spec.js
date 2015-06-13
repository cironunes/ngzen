describe('Directive: <%= name %>', function() {
  var elem, scope;

  beforeEach(module('<%= moduleName %>'));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    elem = angular.element('<<%= name %>></<%= name %>>');

    $compile(elem)(scope);
    scope.$digest();
  }));

  it('should add a class to the element on click', function() {
    elem.triggerHandler('click');
    expect(elem[0].className).toContain('zen');
  });
});