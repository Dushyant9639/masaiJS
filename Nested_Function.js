function outerscope(){
    var text= "I am from the outer function."

    function innerscope(){
        console.log (text);
    }
    innerscope()
}
outerscope()