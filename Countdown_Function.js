function countdown (num){
    if(num<0 && typeof(num)!=="number"){
        console.log("Please provide a valid a Number")
        return;
    }
    for(let i=0;i<num;i++){
        logMessage(i)
    }
}
function logMessage(value){
    console.log(`Countdown at ${value}`)
}
countdown(5)
