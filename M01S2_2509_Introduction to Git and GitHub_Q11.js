function reverseNumber(num) {
    let reversedNum = 0;
    
    while (num > 0) {
        let digit = num % 10;  
        reversedNum = reversedNum * 10 + digit;  
        num = Math.floor(num / 10);  
    }

    return reversedNum;
}

console.log(reverseNumber(971)); 
