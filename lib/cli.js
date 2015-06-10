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
  .description('create a file or all the files for a module')
  .action(creator.service);

program
  .parse(process.argv);

