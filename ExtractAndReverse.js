function extractAndReverse(arr) {
  let subArray = arr.slice(2, 5);
  return subArray.reverse();
}

let originalArray = [15, 30, 45, 60, 75, 90];
let result = extractAndReverse(originalArray);

console.log("Reversed subarray:", result);       
console.log("Original array remains:", originalArray);  
