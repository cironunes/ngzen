var _ = require('underscore');
var fs = require('fs');
var chalk = require('chalk');
var inquirer = require('inquirer');


exports = module.exports = new Creator();

exports.Creator = Creator;

function Creator () {}

Creator.prototype.module = function(name) {
  var fileFolder = _getFileFolder(name);

  _createFolder(fileFolder);
  _createFiles(['module'], { name: name }, fileFolder);
};

Creator.prototype.service = function service(name, moduleName) {
  var fileFolder = _getFileFolder(moduleName);

  _createFolder(fileFolder);

  _createFiles(['service', 'service.spec'], {
    name: name,
    moduleName: moduleName,
    constructorName: name + 'Service'
  }, fileFolder);
};

Creator.prototype.controller = function controller(name, moduleName) {
  var fileFolder = _getFileFolder(moduleName);

  _createFolder(fileFolder);
  _createFiles(['controller', 'controller.spec'], {
    name: name,
    moduleName: moduleName,
    constructorName: name + 'Controller'
  }, fileFolder);
};


Creator.prototype.directive = function controller(name, moduleName) {
  var fileFolder = _getFileFolder(moduleName);

  _createFolder(fileFolder);
  _createFiles(['directive', 'directive.spec'], {
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
        filePath = _getFilePath(folder, config.name, file),
        fileContent = _.template(tpl)(config),
        write = true;

    if (fs.existsSync(filePath)) {
      inquirer.prompt({
        name: 'overwrite',
        type: 'confirm',
        message: 'Would you like to overwrite?',
        default: false
      }, function(answers) {
        if (answers.overwrite) {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err)  throw err;

            _showLogMessage(config.moduleName, config.name, file);
          });
        }
      });
    } else {
      fs.writeFile(filePath, fileContent, function(err) {
        if (err)  throw err;

        _showLogMessage(config.moduleName, config.name, file);
      });
    }
  });
}

function _showLogMessage(module, name, file) {
  var logMsg = '  ' + chalk.blue('%file') + ' was created successfully!',
      file;

  module = module || name;
  file = module + '/' + name + '.' + file + '.js';

  logMsg = logMsg.replace(/%file/, file);

  console.log(logMsg);
}
