function asyncLog(value) {
  Promise.resolve(value).then(
    function onFulfilled(resolvedValue) {
      console.log(resolvedValue);
    },
    function onRejected(error) {
      console.error(error);
    }
  );
}


// asyncLog(45)