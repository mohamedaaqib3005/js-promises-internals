// 1. Create a new promise
// 2. Set its state to pending
// 3. Call  executor function immediately
// 4. Pass resolve and reject into it

// function resolve(value) {
//   set promise state to "fulfilled"
//   store value
//   run all success callbacks
// }

// function reject(error) {
//   set promise state to "rejected"
//   store error
//   run all failure callbacks
// }



/**
 * Returns a final Promise object
 * @param {Array} inputArray
 * @returns {Object} Promise object
 */
function promiseAll(inputArray) {
  return new Promise(function executorFunction(resolvefn, rejectfn) { // takes executor fn(control function.) as an argument , resolve changes the status to fulfilled and stores value in array triggers .then function , reject changes the status to failed stores errors and

    // Internallogic

  });

  // Returns an object which contains state as pending and empty Array which is later filled with promise values controlled by executor function

}


