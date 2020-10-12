var x = "Mohammad faisal"
document.getElementById("string_id").innerHTML = x;
document.getElementById("string_length").innerHTML = "Length of this string 'x' is :" + x.length;

document.getElementById("string_testing").innerHTML =
    "Hello Dolly!";

var x = "John";        // x is a string
var y = new String("John");  // y is an object

document.getElementById("type_check").innerHTML =
    typeof x + "<br>" + typeof y;
document.getElementById("compare").innerHTML = (x===y);

var str = "Please locate where 'locate' occure";
document.getElementById("finding_string_method").innerHTML = 
str.indexOf("locate");
document.getElementById("string_not_found").innerHTML =
str.lastIndexOf("faisal");
document.getElementById("slice_id").innerHTML = 
str.slice(7,14);
document.getElementById("reverse_slice").innerHTML = 
str.slice(-6,-1);