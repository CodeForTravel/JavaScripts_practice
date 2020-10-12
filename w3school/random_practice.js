// "use strict";
var str = "The search() method searches a string for a specified \
 value and returns the position of the match:";
x = str.search("string");
document.getElementById("search_id").innerHTML =
"position of the match : " + x;





var str1 = 'Search a string for "w3Schools", and display the position of the match';
var y = str1.search(/display/i);
document.getElementById("search_with_regex").innerHTML = 
    "position of the match : " + y;



var str3 = document.getElementById("rep_id").innerHTML;
var z = str3.replace("Microsoft","W3Schools");
document.getElementById("rep_id").innerHTML = z;



// JavaScript Declarations are Hoisted

var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("Hoisted1"); // Find an element 
elem.innerHTML = "hoisted value : " + x; // Display x in the element


var m = 5;  // Initialize x

elem = document.getElementById("Hoisted2");      // Find an element 
elem.innerHTML = "m is " + m + " and n is " + n;  // Display x and y

var n = 7;  // Initialize y



k = 3.14;  // This will cause an error (x is not defined).




var person = {
    fullName : function(city = "Not defined",country="Not defined"){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName : "Mohammad",
    lastName  : "Faisal"
}

var r = person.fullName.apply(person1);
document.getElementById("apply_id").innerHTML = r;





var g = person.fullName.apply(person1,["Chittagong","Bangladesh"]);
document.getElementById("applywith_arg").innerHTML = g;

// var g = person.fullName.call(person1, ["Chittagong", "Bangladesh"]);
// document.getElementById("applywith_arg").innerHTML = g;



var add  = (
    function(){
        var count = 0;
        return function(){
            count += 1;
            return count;
        }
    }
)
();

function myCountFunction(){
    document.getElementById("counter_id").innerHTML = add();
}