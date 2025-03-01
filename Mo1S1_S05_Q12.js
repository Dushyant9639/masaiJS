let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let str=""
for (let i=arr.length-1;i>=0;i--){
str+= arr[i][0] +" "
if(i==0){
  for(let j=1;j<=arr[0].length-1;j++){
    str+= arr[0][j] +" "
if(j==arr[0].length-1){
  for(let k=1;k<=arr.length-1;k++){
    str+=arr[k][arr[0].length-1]+" "
  }
}
  }
}
}
for(let j=arr[0].length-2;j>0;j--){
str+=arr[arr.length-1][j]
}
console.log(str)