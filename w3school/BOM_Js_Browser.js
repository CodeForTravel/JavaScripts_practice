var w = window.innerWidth 
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var h = window.innerHeight 
|| document.documentElement.clientHeight
|| document.body.clientHeight;
document.getElementById("window_size").innerHTML = "Window height  : "
 + h + "<br> Window width : "+w;



// Screen Js
document.getElementById("screen_width").innerHTML ="Current Screen Width : "+ screen.width;
document.getElementById("availabe_width").innerHTML = "Availabe Screen Width : " + screen.availWidth;
document.getElementById("screen_height").innerHTML = " Current Screen Height : " + screen.height;
document.getElementById("availabe_height").innerHTML = "Availabe Screen Height : " + screen.availHeight;
document.getElementById("depth_color").innerHTML = "Screen Color Depth : " + screen.colorDepth;
document.getElementById("Pixel_Depth").innerHTML =
    "Screen Pixel Depth: " + screen.pixelDepth;



// JavaSrcipt Window Location
document.getElementById("page_location").innerHTML = 
"Page Location is : "+ window.location.href;
document.getElementById("host_name").innerHTML = 
"Page Hostname is : "+ window.location.hostname;
document.getElementById("path_name").innerHTML = 
"Page Path is : "+ window.location.pathname;
document.getElementById("protocol").innerHTML = 
"Page Protocol : "+ window.location.protocol;


// Js Window Navigation
document.getElementById("app_name").innerHTML = 
"App name : "+ navigator.appName;
document.getElementById("appCodeName").innerHTML =
    "navigator.appCodeName is :" + navigator.appCodeName;


document.getElementById("product_name").innerHTML = 
"navigator.product is : "+ navigator.product;

document.getElementById("app_Version").innerHTML =
    "navigator.appVersion is : " + navigator.appVersion;

document.getElementById("user_Agent").innerHTML =
    "navigator.userAgent is : " + navigator.userAgent;

document.getElementById("onLine").innerHTML =
    "navigator.onLine is " + navigator.onLine;