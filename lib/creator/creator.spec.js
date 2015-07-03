var creator = require('./creator');
var fs = require('fs');
var del = require('del');
var path = require('path');
var _ = require('underscore');

describe('Module: Creator', function() {
  var createFolder;

  describe('#module', function() {
    beforeEach(function() {
      createFolder = sinon.spy(fs, 'mkdirSync');
    });

    afterEach(function() {
      del.sync(path.join(process.cwd(), '/foo'));
      createFolder.restore();
    });

    it('should create a folder with the module `name`', function() {
      creator.module('foo');

      expect(createFolder).to.have.been.calledWith(path.join(process.cwd(), '/foo/'));
    });

    it('should create a file with the module name and template', function() {
      var  createFile = sinon.spy(fs, 'writeFile'),
          fileName = path.join(process.cwd(), '/foo/foo.module.js'),
          template = fs.readFileSync(__dirname + '/../templates/module.js').toString(),
          fileTemplate = _.template(template)({ name: 'foo' });

      creator.module('foo');

      expect(createFile).to.have.been.calledWith(fileName, fileTemplate);
    });
  });

  describe('#service', function() {
    it('should create a folder with the module name', function() {
      creator.service('foo', 'bar');

      expect(createFolder).to.have.been.calledWith(path.join(process.cwd(), '/bar/'));
    });
  });
});