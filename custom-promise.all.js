/**
 * Promise.all — Internal Coordination & Execution Flow
 * What it Does:
 * Resolves only if all promises resolve
 * Rejects immediately if any promise rejects
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

    inputArray.forEach((element, i) => {
      element.then(
        function onFullfilled(value) {
          result[i] = value;
          completedPromise++;

          if (completedPromise === inputArray.length) {
            resolve(result); // FINAL promise resolved
          }
        },
        function onRejected(error) { // rejects when you throw the error
          reject(error); // FINAL promise rejected
        }
      )
    })
  })

}


var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("foo");
  }, 300);
})

var p2 = Promise.resolve("p2: created with Promise.resolve"); // Already fulfilled

var p3 = Promise.reject("error").catch(err => {
  throw err; // handling the rejection here itself coz it is custom promise.all js handles incase of native
});

async function createP4() { // equivalent to Promise.resolve(...)
  return "p4: created using async function";
}

var p4 = createP4();

async function createP5() { // cleaner and more readable
  const value = await Promise.resolve("p5: async + await");
  return value;
}


var p5 = createP5();

var p6 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p6: wrapped callback-style async");
  }, 500);
});


function delay(ms, value) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(value), ms);
  });
}

var p7 = delay(700, "p7: delay factory promise");


var value = "p8: sync value normalized";
var p8 = Promise.resolve(value);

var basePromise = Promise.resolve("p9: base promise");
var p9 = Promise.resolve(basePromise);

function conditionalPromise(flag) {
  if (flag) {
    return Promise.resolve("p10: condition true");
  } else {
    return Promise.reject("p10: condition false");
  }
}

var p10 = conditionalPromise(true);

var inputArray = [
  p1,
  p2,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10
];

promiseAll(inputArray)
  .then(result => {
    console.log("All resolved:", result);
  })
  .catch(error => {
    console.error("One promise failed:", error);
  });



console.log(promiseAll())