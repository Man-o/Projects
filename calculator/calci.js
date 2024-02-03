let screen=document.querySelector('.ioscreen')
    function display(num){
        screen.value+=num
    }
    condition=true
    function calculate(){
        if(condition=true){
            screen.value=eval(screen.value)
        }
        else{
            alert("Invalid")
        }
    }
    function c(){
        screen.value=""
    }

