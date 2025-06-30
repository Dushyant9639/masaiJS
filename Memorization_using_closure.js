function memoize(fn, maxSize = 5) {
    const cache = new Map(); 

    return function(...args) {
        const key = JSON.stringify(args); 

        if (cache.has(key)) {

            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }

        const result = fn(...args);
        cache.set(key, result);
        if (cache.size > maxSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }

        return result;
    };
}
function slowSquare(n) {
    console.log("Calculating for", n);
    return n * n;
}

const memoizedSquare = memoize(slowSquare, 5);

console.log(memoizedSquare(2)); 
console.log(memoizedSquare(2)); 

console.log(memoizedSquare(3)); 
console.log(memoizedSquare(4)); 
console.log(memoizedSquare(5)); 
console.log(memoizedSquare(6)); 

console.log(memoizedSquare(2)); 
