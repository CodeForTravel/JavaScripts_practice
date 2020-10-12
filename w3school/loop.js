var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for(i=0; i<cars.length; i++){
    text += cars[i] + "<br>";
}

document.getElementById("for_loop").innerHTML = text;


var txt = "";
var person = { fname: "John", lname: "Doe", age: 25 }; 
var x;
for (x in person){
    txt += person[x] + "<br>";
}
document.getElementById("for_in").innerHTML = txt;