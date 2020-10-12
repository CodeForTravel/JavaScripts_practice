var elment_by_id = document.getElementById("by_id");
document.getElementById("result_by_id").innerHTML = 
"The result : " + elment_by_id.innerHTML;

var element_tag_name = document.getElementsByTagName("p");
document.getElementById("result_by_tag_name").innerText = 
"The reuslt found By Tag name : " + element_tag_name[2].innerHTML;


var x = document.getElementById("main");
var y = document.getElementsByTagName("p");
document.getElementById("all_elements").innerHTML = 
"Result : " + y[4].innerHTML;


var m = document.querySelectorAll("p.inrto");
document.getElementById("result_query_selector").innerHTML = 
'The first paragraph (index 2) with class="intro" : ' + m[3].innerHTML;




document.getElementById("mybtn").onclick = dispDate;
function dispDate() {
    document.getElementById("date").innerHTML = Date();
}




function checkCookies(){
    var text = "";
    if(navigator.cookieEnabled == true){
        text = "Cookies are enabled";
    }
    else{
        text = "Cookies are not enabled";
    }
    document.getElementById("cookies").innerHTML = text;
}




function changeFunction(){
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}





function mOver(x){
    x.innerHTML = "Text changed now!";
}
function mOut(x) {
    x.innerHTML = "Mouse Over Me";
}



document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
    document.getElementById("demo2").innerHTML = Date();    
}


document.getElementById("myBtn1").addEventListener("click",function(){
    alert("Don't do this..!")
})



// document.getElementById("child_node2").innerHTML =
//  document.getElementById("child_node1").innerHTML;

// document.getElementById("child_node2").innerHTML =
// document.getElementById("child_node1").firstChild.nodeValue;

document.getElementById("child_node2").innerHTML =
document.getElementById("child_node1").childNodes[0].nodeValue;


// alert(document.body.innerHTML);
// alert(document.documentElement.innerHTML);



// Creating New HTML Elements(Nodes)

var pera = document.createElement("h4");
var node = document.createTextNode("This is a new created Node! by js");
pera.appendChild(node);
var derived_node = document.getElementById("create_nodes");
derived_node.appendChild(pera);



function removeFunction(){
    var element = document.getElementById("remove_p");
    element.remove();
}