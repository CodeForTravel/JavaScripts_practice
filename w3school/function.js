function myFunction(p1,p2){
    return p1+p2;
}

document.getElementById("function_id").innerHTML =
 myFunction(4,5);

function myFunction1(p1, p2) {
    return p1 * p2;
}
var x = myFunction1(4, 5);
document.getElementById("function_id_1").innerHTML = x;
 
function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
document.getElementById("function_object").innerHTML = toCelsius;




myFunction();

function myFunction() {
    var carName = "Volvo";
    document.getElementById("local_varibale").innerHTML =
        typeof carName + " " + carName;
}

document.getElementById("undefined_variable").innerHTML =
    typeof carName;


// objects are almost similar to the variable
var car = { type:"Fiat", model:"500", color:"white"};
document.getElementById("object_id").innerHTML = 
"The car type is " + car.type + 
"<br> The car color is " + car.color+
"<br> The car model is " + car["model"];

var person = {
    firstName : "Mohammad",
    lastNam   : "Faisal",
    id        : "ASH1711047M",
    fullName  : function(){
        return this.firstName + " " + this.lastNam;
    }
};

document.getElementById("object_method").innerHTML = person.fullName();