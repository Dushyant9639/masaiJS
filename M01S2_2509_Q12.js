let n= 19
let seen={}

while(n!=1){
    if(seen[n]){
        console.log("False")
        break;
    }
seen[n]=true;
let sum =0, temp=n;
while(temp>0){
    let digit=temp%10
    sum+= digit*digit;
    temp=(temp-digit)/10
}
n=sum
}
if(n==1)
    console.log("true")