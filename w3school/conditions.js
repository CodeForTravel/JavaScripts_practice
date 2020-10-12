
if (new Date().getHours < 18){
    document.getElementById("if_id").innerHTML = "Good day"
}



function if_else_Function(){
    var hour = new Date().getHours();
    var greeting;
    if (hour<18){
        greeting = "Good Day";
    }
    else{
        greeting = "Good evening";
    }
    document.getElementById("if_else").innerHTML = greeting;
}




function else_if_Function(){
    var x = Math.floor(Math.random()*100);
    var result;
    
    if(x%2 == 0){
        result = "Even number";
    }
    else if (x%2 == 1){
        result = "Odd number";
    }
    else{
        result = "Zero";
    }
    document.getElementById("else_if").innerHTML = result;
}