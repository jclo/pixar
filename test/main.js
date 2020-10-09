// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const // Pixar = require('../index')
    Pixar     = require('../public/src/main').default
    // , pack    = require('../package.json')
    , testlib = require('./int/lib')
    ;


// -- Local Constants
// const libname = 'Pixar';


// -- Local Variables


// -- Main

// Nota:
// If you choose 'Pixar = require('../index')', 'display-coverage' will
// show the coverage of all the library in one file.
//
// If you want to display the coverage file by file, you must choose
// 'Pixar = require('../src/prototypal').default'. But, in this case,
// the build isn't done, so you should pass '{{lib:name}}' as libname and
// '{{lib:version}}' as the library version.

describe('Test Pixar:', () => {
  testlib(Pixar, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(Pixar, libname, pack.version, 'without new');
});
