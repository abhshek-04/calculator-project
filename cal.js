const display = document.getElementById("display")

function allButton(input){
    display.value += input;
    
}



function clearDisplay(){
    display.value = "" ;
}


function calculater(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}
