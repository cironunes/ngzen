var _ = require('underscore');
var fs = require('fs');

exports = module.exports = new Creator();

exports.Creator = Creator;

function Creator () {}

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

Creator.prototype.module = function(name) {
  var template = _getTemplate('module'),
      fileFolder = _getFileFolder(name),
      filePath = fileFolder + name + '.module.js',
      fileContent = _.template(template)({ name: name });

  _createFolder(fileFolder);

  fs.writeFile(filePath, fileContent);
};

Creator.prototype.service = function service(name, moduleName) {
  var serviceTemplate = _getTemplate('service'),
    testTemplate = _getTemplate('service.spec'),
    fileFolder = _getFileFolder(name),
    filePath = fileFolder + name + '.service.js',
    testPath = fileFolder + name + '.service.spec.js',
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
