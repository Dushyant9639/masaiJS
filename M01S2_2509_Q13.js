let k=25;
let marker =false;

for(let a=0;a*a<=k;a++){
    for(let b=0;b*b<=k;b++){
        if(a*a + b*b == k){
            found=true
            break
        }
    }
    if(found) break;
}
console.log(found)