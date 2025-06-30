function createCounter() {
    let count = 0; 

    function counter() {
        count += 1;
        return count;
    }
    counter.reset = function () {
        count = 0;
    };

    return counter;
}
const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

counter.reset();       

console.log(counter());
console.log(counter()); 
