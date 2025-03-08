let n = 2; 
let seenNumbers = {}; 

while (n !== 1 && !seenNumbers[n]) {  
    seenNumbers[n] = true; 
    let sum = 0;
    let temp = n;

    while (temp > 0) {
        let digit = temp % 10;  
        sum += digit * digit;   
        temp = (temp - digit) / 10;
    }

    n = sum;
}

if (n === 1) {
    console.log("true"); 
} else {
    console.log("false");
}
