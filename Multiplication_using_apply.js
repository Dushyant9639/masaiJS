function multiplyNumbers(a, b) {
  function multiply(x, y) {
    return x * y;
  }

  return multiply.apply(null, [a, b]);
}

console.log(multiplyNumbers(4, 5)); 
