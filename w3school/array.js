var cars = ["Saab","Yamaha","BMW", "Volbo"]
document.getElementById("first_array").innerHTML = cars;

// Array and for loop

var fruits,flen, text,i;
fruits = ["banana","Orange","Apple","Mango"];
flen = fruits.length;
text = "<ul>";
for(i=0; i<flen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("for_loop").innerHTML = text;

var sports,item;
sports = ["Cricket", "Football", "Hockey","Badminton"];

item = "<ul>";
sports.forEach(myfunction);
item += "</ul>";
document.getElementById("foreach").innerHTML = item;

function myfunction(value){
    item += "<li>" + value + "</li>";
}


// array method


var fruits1 = ["Banana","Orange","Apple","Mango"];
document.getElementById("tostring").innerHTML = fruits1.toString();

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("join").innerHTML = fruits2.join("-");


fruits2.pop();
document.getElementById("pop_method").innerHTML = fruits2;

var k = fruits1.pop();
document.getElementById("pop_out").innerHTML = k;

fruits1.push("kiwi");
document.getElementById("push_method").innerHTML = fruits1;

var j = fruits1.push("Plum");
document.getElementById("push_output").innerHTML = j;

var L =fruits1.shift();
document.getElementById("shift_method").innerHTML =
"Shifted Item :   \
  " + L + "<br> After Shift : " + fruits1;fruits1

fruits1.unshift("Lemon");
document.getElementById("unshift_method").innerHTML = fruits1;


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("splice1").innerHTML = "Original Array:<br>" + fruits1;
function mySpliceFunction() {
    fruits1.splice(2, 2, "-Lemon-", "-Kiwi-");
    document.getElementById("splice2").innerHTML = "New Array:<br>" + fruits1;
}

// The first parameter(2) defines the position where new elements should be added(spliced in).

// The second parameter(0) defines how many elements should be removed.

// The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
document.getElementById("concatenate").innerHTML = myChildren;


// Array Sorting


document.getElementById("sorting").innerHTML =
"Before sort   :  "+ fruits1 + "<br> After sort  :  "+ fruits1.sort();


document.getElementById("reverse").innerHTML = fruits1.reverse();


var points = [40, 100, 1, 5, 25, 10];
document.getElementById("sort").innerHTML = points;

function sortFunction() {
    points.sort(function (a, b) { return a - b });
    document.getElementById("sort").innerHTML = points;
}

// 
// Random Sort

var points1 = [12,34,65,23,655,234];
document.getElementById("random_sort").innerHTML = points1;
function randomSortFunction() {
    points1.sort(function(a,b){
        return 0.5 - Math.random() 
    });
    document.getElementById("random_sort").innerHTML = points1;
}


var points2 = [12,232,343,121,32,12,32];
document.getElementById("array_max").innerHTML =
"Actual Array : "+ points2 + "<br> Max Value : " + 
myArrayMax(points2) + "<br> Min Value  : "+ 
myArrayMin(points2);

function myArrayMax(arr){
    return Math.max.apply(null,arr);
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

var cars4 = [
    { type : "Volbo", year : 2016 },
    { type : "Saab",  year : 2001 },
    { type : "BMW" ,  year : 2010 }
];

dicplayCars();
function objectSortFunction(){
    cars4.sort(function(a,b){return a.year - b.year});
    dicplayCars();
}

function dicplayCars(){
    document.getElementById("object_array").innerHTML = 
    cars4[0].type + " " + cars4[0].year + "<br>" +
    cars4[1].type + " " + cars4[1].year + "<br>" +
    cars4[2].type + " " + cars4[2].year;
}


// array Iteration

var txt = "";
var numbers = [12,34,56,2,4,45,23,56,4];
numbers.forEach(forEachFunction);
document.getElementById("for_each").innerHTML = txt;

// function forEachFunction(value){  can be write like this

function forEachFunction(value , index ,array) {
    txt = txt + value + "<br>";
}

var numbers_map = numbers.map(arrayMapFunction);
document.getElementById("array_map").innerHTML = numbers_map;
function arrayMapFunction(value,index,array){
    return value*2 +"<br>";
}