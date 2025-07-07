function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(taskAResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${taskAResult}`);
    }, 1500);
  });
}

function finalizeTask(taskBResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${taskBResult}`);
    }, 500);
  });
}

startTask()
  .then(resultA => {
    console.log(resultA); 
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(resultC => {
    console.log(resultC);
  })
  .catch(error => {
    console.error("Error in task chain:", error);
  });
