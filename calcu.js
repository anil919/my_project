let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenvalue="";
let buttonText="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=="*"){
            screenvalue+=buttonText;
            screen.value=screenvalue;
            console.log(screen.value);
        }
        else if(buttonText=="÷"){
            buttonText="/"
            screenvalue+=buttonText;
            screen.value=screenvalue;
            console.log(screen.value);
        }
        else if(buttonText=='CE'){
            screenvalue="";
            screen.value=screenvalue;

        }
        else if(buttonText=="="){
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue+=buttonText;
            screen.value=screenvalue;
        }
    })
}