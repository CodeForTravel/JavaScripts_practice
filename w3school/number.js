var x = 3.14;
var y = 3;
document.getElementById("number1").innerHTML = x + "<br>" + y;


var a = 123e5;
var b = 123e-5;
document.getElementById("exponent_number").innerHTML = 
"123e5 :   \t " + a + "<br> 123e-5:   \t " + b;

var x = 0.2 + 0.1;
document.getElementById("demo1").innerHTML =
 "0.2 + 0.1 = " + x;
var y = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo2").innerHTML =
 "0.2 + 0.1 = " + y;

 var m = 10,n=20;
 var z = "30";
 var result1 = m+n+z;
document.getElementById("string_by_string").innerHTML=
result1;
var p = "100",q="10";
document.getElementById("division").innerHTML =
"Divition of p and q: "+ p / q;
document.getElementById("multiplaction").innerHTML =
"Multiplaction of p and q: " + p * q;
document.getElementById("substraction").innerHTML = p - q;

var r = 100 / "apple";
document.getElementById("NoN").innerHTML=r;
var s = 100 / "10";
document.getElementById("number_by_string")


var number = 32;
document.getElementById("number_format_change").innerHTML=
"32 = " +"<br>" +
"Decimal " + number.toString(10) + "<br>" +
"Hexadeciaml " + number.toString(16) + "<br>"+
"Octal " + number.toString(8) + "<br>"+
"Binary "+ number.toString(2);