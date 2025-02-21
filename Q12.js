function greetuser(){
    let name=prompt("Enter your name")
    if(name){
        console.log("Hello"+" " +name+" !")
    }
    else{
        console.log("Hello, Guest!")
    }
}
greetuser()