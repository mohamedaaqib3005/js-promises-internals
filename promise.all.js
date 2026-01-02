// 1. Create a new promise
// 2. Set its state to pending
// 3. Call  executor function immediately
// 4. Pass resolve and reject into it
/**
 * Returns a final Promise object
 * @param {Array} inputArray
 * @returns {Object} Promise object
 */
function promiseAll(inputArray) {
  return new Promise(function executorFunction(resolvefn, rejectfn) { // takes executor fn as an argument

    // Returns an object which contains state as pending and empty Array which is later filled with promise values.


  });


}


