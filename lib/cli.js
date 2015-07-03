#!/usr/bin/env node
var program = require('commander');
var creator = require('./creator').creator;


program.version('0.0.1');

program
  .command('module <name>')
  .description('create a file or all the files for a module')
  .action(creator.module);

program
  .command('service <name> <moduleName>')
  .description('create a service for the specified module')
  .action(creator.service);

program
  .command('controller <name> <moduleName>')
  .description('create a controller for the specified module')
  .action(creator.controller);

program
  .command('directive <name> <moduleName>')
  .description('create a directive for the specified module')
  .action(creator.directive);

program
  .command('constant <name> <moduleName>')
  .description('create a contant for the specified module')
  .action(creator.constant);

program
  .parse(process.argv);

