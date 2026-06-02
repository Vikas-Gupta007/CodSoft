let screen = document.getElementById("screen");

function showValue(value){

    screen.value = screen.value + value;

}

function clearScreen(){

    screen.value = "";

}

function removeOne(){

    screen.value = screen.value.slice(0, -1);

}

function answer(){

    try{

        screen.value = eval(screen.value);

    }

    catch{

        screen.value = "Invalid";

    }

}