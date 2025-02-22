let arr = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
let newArr = [];
newArr[0] = "High Priority Task 1";
newArr[1] = "High Priority Task 2";
for (let i = 1; i < arr.length - 1; i++) {
  newArr[i + 1] = arr[i];
}
newArr[newArr.length] = "New Last Task";
console.log(newArr);
