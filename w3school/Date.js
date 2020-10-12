var x = new Date();
document.getElementById("date_id").innerHTML ="It is :  \t "+ x;

// var d = new Date(year,month,day,hours,minutes,seconds,milliseconds);
var d = new Date(2020,1,29,14,52,23,9);
document.getElementById("date_id1").innerHTML = d;

var five_p = new Date(2020,1,29,14,57);
document.getElementById("five_numbers").innerHTML = five_p;

var tow_p = new Date(2020,1);
document.getElementById("tow_p").innerHTML = tow_p;

var tow_digit = new Date(96,2,23);
document.getElementById("tow_digit").innerHTML = tow_digit;


var q = new Date();
document.getElementById("to_Date_String").innerHTML = q.toDateString();


// The ISO 8601 syntax(YYYY - MM - DD) is also the preferred JavaScript date format:

var m = new Date("2015-03-25");
document.getElementById("ios_format").innerHTML = m;
