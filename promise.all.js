/**
 * Promise.all — Internal Coordination & Execution Flow
 *
 * How it works (high-level):
 *
 * 1. promiseAll takes an input array and RETURNS a single Promise (final promise).
 * 2. new Promise immediately creates this final promise in the "pending" state.
 * 3. JavaScript provides resolve and reject functions to the executor.
 * 4. JavaScript manages:
 *    - promise state (pending / fulfilled / rejected)
 *    - stored value or error
 *    - scheduling of .then / .catch callbacks
 * 5. The executor function implements coordination logic:
 *    - normalize each input using Promise.resolve
 *    - attach .then handlers to each input promise
 *    - collect results in order
 *    - count completed promises
 *    - decide when to resolve or reject the final promise
 * 6. When resolve or reject is called:
 *    - JavaScript updates the final promise’s state
 *    - JavaScript schedules registered callbacks (microtasks)
 */

/**
 * Custom implementation of Promise.all
 * @param {Array} inputArray
 * @returns {Promise}
 */
function promiseAll(inputArray) {
  return new Promise(function (resolve, reject) {
    let completedPromise = 0;
    let result = [];

    if (inputArray.length === 0) {
      resolve(result)
      return;
    }

    for (let i = 0; i < inputArray.length; i++) {
      Promise.resolve(inputArray[i]).then(
        function onFullfilled(value) {
          result[i] = value;
          completedPromise++;

          if (completedPromise === inputArray.length) {
            resolve(result); // FINAL promise resolved
          }
        },
        function onRejected(error) {
          reject(error); // FINAL promise rejected
        }
      )
    }
  })

}
