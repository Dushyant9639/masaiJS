function outerFunction() {
    const message = "Hello from the closure!";
    
    return function innerFunction() {
        console.log(message);
    };
}
const storedFunction = outerFunction();
storedFunction(); 