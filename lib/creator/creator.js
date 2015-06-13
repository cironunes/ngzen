var _ = require('underscore');
var fs = require('fs');

exports = module.exports = new Creator();

exports.Creator = Creator;

function Creator () {}

Creator.prototype.module = function(name) {
  var fileFolder = _getFileFolder(name);

  _createFolder(fileFolder);
  _createFiles(['module'], { name: name }, fileFolder);
};

Creator.prototype.service = function service(name, moduleName) {
  var fileFolder = _getFileFolder(name);

  _createFolder(fileFolder);

  _createFiles(['service', 'service.spec'], {
    name: name,
    moduleName: moduleName,
    constructorName: name + 'Service'
  }, fileFolder);
};

Creator.prototype.controller = function controller(name, moduleName) {
  var fileFolder = _getFileFolder(name);

  _createFolder(fileFolder);
  _createFiles(['controller', 'controller.spec'], {
    name: name,
    moduleName: moduleName,
    constructorName: name + 'Controller'
  }, fileFolder);
};


Creator.prototype.directive = function controller(name, moduleName) {
  var fileFolder = _getFileFolder(name);

  _createFolder(fileFolder);
  _createFiles(['directivee', 'directive.spec'], {
    name: name,
    moduleName: moduleName,
    constructorName: name + 'Directive'
  }, fileFolder);
};


function _getTemplate(type) {
  return fs.readFileSync(__dirname + '/../templates/'+ type +'.js').toString();
}

function _createFolder(folderPath) {
  try {
    fs.mkdirSync(folderPath);
  } catch(e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

function _getFileFolder(name) {
  return process.cwd() + '/' + name + '/';
}

function _getFilePath(fileFolder, moduleName, suffix) {
  return fileFolder + moduleName + '.' + suffix + '.js';
}

function _createFiles(files, config, folder) {
  files.forEach(function(file) {
    var tpl = _getTemplate(file),
        fileName = config.moduleName || config.name,
        filePath = _getFilePath(folder, fileName, file),
        fileContent = _.template(tpl)(config);

    fs.writeFile(filePath, fileContent);
  });
}

