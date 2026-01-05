function customLog(promise) {
  //  Convert the input into a Promise

  // Register a function to run when the promise resolves
  promise.then(function onFulfilled(resolvedValue) {

    // Log the resolved value
    console.log(resolvedValue);

  });
}
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("foo");
  }, 300);
})
customLog(promise);

