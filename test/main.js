// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const testlib = require('./int/lib')
    , pack    = require('../package.json')
    ;


// -- Local Constants
const libname = 'Pixar';


// -- Local Variables


// -- Main

// This define root for Node.js:
global.root = {};

// Nota:
// If you want that 'display-coverage' shows the coverage files by files,
// you should set 'Pixar' and 'testlib' like this:
//  . const Pixar = require('../src/<file>').default;
//  . testlib(Pixar, '{{lib:name}}', '{{lib:version}}', 'without new');
//
// But, if you want that 'display-coverage' shows the coverage in one file,
// you should set 'Pixar' and 'testlib' like this:
//  . const Pixar = require('../index');
//  . testlib(Pixar, libname, pack.version, 'without new');

const Pixar = require('../public/src/main').default;
// const Pixar = require('../index');

describe('Test Pixar:', () => {
  testlib(Pixar, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(Pixar, libname, pack.version, 'without new');
});
