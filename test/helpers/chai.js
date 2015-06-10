var chai = require('chai');
var sinonChai = require('sinon-chai');

chai.config.includeStack = true;
chai.use(sinonChai);

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;