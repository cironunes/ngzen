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
  .parse(process.argv);

