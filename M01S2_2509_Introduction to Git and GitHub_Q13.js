let k = 25; 
let found = false;

for (let a = 0; a * a <= k; a++) {
    let b2 = k - a * a; 
    let b = 0;

    while (b * b < b2) {
        b++;
    }

    if (b * b === b2) {  
        found = true;
        break;
    }
}

console.log(found); 