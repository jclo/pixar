/** ************************************************************************
 *
 * Starts the App.
 *
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Function:
 *  . Pixar                       starts the App,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global */
/* eslint-disable one-var, semi-style, no-console */


// -- Vendor Modules


// -- Local Modules
import Worker from './worker/main';


// -- Local Constants
const sw = './sw.js';


// -- Local Variables


// -- Public ---------------------------------------------------------------

/**
 * Starts Pixar.
 *
 * @function ()
 * @public
 * @param {}                -,
 * @returns {}              -,
 * @since 0.0.0
 */
function Pixar() {
  Worker.start(sw, (err, msg) => {
    if (err) {
      console.log(err);
    } else {
      console.log(msg);
    }
  });
}

// Attaches a constant to Pixar that provides the version of the lib.
Pixar.VERSION = '{{lib:version}}';


// -- Export
export default Pixar;

/* eslint-enable one-var, semi-style, no-console */
