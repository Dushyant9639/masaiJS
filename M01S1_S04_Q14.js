let scores=[35,56,89,90,91,56,87,23,45,98]
let count=0
for(let i=0;i<scores.length;i++){
    if(scores[i]<=40){
        scores[i]+=20;
    }
    if(scores[i]>90){
        scores[i]=90;
    }
    if(scores[i]>=50){
        count++
    }
}

console.log(scores)
console.log("Number of student passed", count)