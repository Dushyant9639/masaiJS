let arr= [[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]
let marker=true
let str=""
for(let i=0;i<arr.length;i++){
  if(marker){
  for(let j=arr[i].length-1;j>=0;j--){
    str+= arr[i][j]+" "
  }
  marker=false
  }
  else{
    for(let j=0;j<=arr[i].length-1;j++){
      str+= arr[i][j] +" "
    }
    marker=true
  }
}
console.log(str)