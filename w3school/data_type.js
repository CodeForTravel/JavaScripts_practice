var x = 16 + " Hello"
document.getElementById('demo').innerHTML = x;


var y = 16 + 4 + " hello"
document.getElementById('demo1').innerHTML = y;


var z = "hello " + 16 + 4
document.getElementById('demo3').innerHTML = z;


var a;           // Now x is undefined
a = 5;           // Now x is a Number
a = "John";      // Now x is a String
document.getElementById('a').innerHTML = a;



var b;
b = "John";
b = 5;
document.getElementById('b').innerHTML = b;



var c = 10e2; // 10*10^2
var d = 10e-2; // 10*10^-2
document.getElementById('c').innerHTML = c;
document.getElementById('d').innerHTML = d;



var d =5,e=5,f=6;
document.getElementById('e').innerHTML = (d == e) + "<br>" + (e == f);


var cars = ["saab","volvo","BMW"];
document.getElementById('f').innerHTML = cars[0]
document.getElementById('g').innerHTML = cars[2]
document.getElementById('h').innerHTML = cars[1]


var person = {
    first_name : " Mohammad ",
    last_name  : "Faisal",
    age        : 22,
    eyeColor   : "Black" 
};

document.getElementById('i').innerHTML = person.last_name + " is " + person.age + " years old";


document.getElementById('j').innerHTML = 
    typeof "" + "<br>" +
    typeof "John" + "<br>" +
    typeof "John Doe" + "<br>" +
    typeof 0 + "<br>" +
    typeof 314 + "<br>" +
    typeof 3.14 + "<br>" +
    typeof 3 + "<br>" +
    typeof (3 + 4);
