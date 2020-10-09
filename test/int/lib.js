// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of properties added by your library.
const OWNPROPS = 0
    , TESTMODE = 0
    ;


// -- Local Variables


// -- Main
module.exports = function(Pixar, libname, version) {
  describe('Pixar introspection:', () => {
    describe('Test the nature of Pixar:', () => {
      it('Expects Pixar to be a function.', () => {
        expect(Pixar).to.be.a('function');
      });

      it(`Expects Pixar to own ${1 + OWNPROPS} property(ies).`, () => {
        expect(Object.keys(Pixar)).to.be.an('array').that.has.lengthOf(1 + OWNPROPS);
      });
    });
  });
};
