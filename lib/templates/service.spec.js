describe('Service: <%= name %>', function() {
  var <%= name %>;

  beforeEach(module('<%= moduleName %>'));

  beforeEach(inject(function(_<%= name %>_) {
    <%= name %> = _<%= name %>_;
  }));

  it('should have a bar property equal to 42', function() {
    expect(<%= name %>.bar).toBe(42);
  });

  describe('#foo', function() {
    it('should be 42', function() {
      expect(<%= name %>.foo()).toBe(42);
    });
  });
});