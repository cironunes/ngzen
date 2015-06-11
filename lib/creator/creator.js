var _ = require('underscore');
var fs = require('fs');

exports = module.exports = new Creator();

exports.Creator = Creator;

function Creator () {}

Creator.prototype.module = function(name) {
  var template = _getTemplate('module'),
      fileContent = _.template(template)({ name: name }),
      fileFolder = _getFileFolder(name),
      filePath = _getFilePath(fileFolder, name, 'module');

  _createFolder(fileFolder);

  fs.writeFile(filePath, fileContent);
};

Creator.prototype.service = function service(name, moduleName) {
  var serviceTemplate = _getTemplate('service'),
    testTemplate = _getTemplate('service.spec'),
    fileFolder = _getFileFolder(name),
    filePath = _getFilePath(fileFolder, name, 'service'),
    testPath =  _getFilePath(fileFolder, name, 'service.spec'),
    constructorName = name + 'Service',
    fileContent = _.template(serviceTemplate)({
      name: name,
      moduleName: moduleName,
      constructorName: constructorName
    }),
    testContent = _.template(testTemplate)({
      name: name,
      moduleName: moduleName
    });

  _createFolder(fileFolder);

  fs.writeFile(filePath, fileContent);
  fs.writeFile(testPath, testContent);
};

Creator.prototype.controller = function controller(name, moduleName) {
  var controllerTemplate = _getTemplate('controller'),
    testTemplate = _getTemplate('controller.spec'),
    fileFolder = _getFileFolder(name),
    filePath = _getFilePath(fileFolder, name, 'controller'),
    testPath = _getFilePath(fileFolder, name, 'controller.spec'),
    constructorName = name + 'Service',
    fileContent = _.template(controllerTemplate)({
      name: name,
      moduleName: moduleName,
      constructorName: constructorName
    }),
    testContent = _.template(testTemplate)({
      name: name,
      moduleName: moduleName
    });

  _createFolder(fileFolder);

  fs.writeFile(filePath, fileContent);
  fs.writeFile(testPath, testContent);
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