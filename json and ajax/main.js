var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter +".json");
    ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    showData(ourData);
    };
    ourRequest.send();
    pageCounter++;

    // if( pageCounter > 3 ){
        
    // }
});


function showData(data){
    var htmlString = "";
    let i = 0;
    let len = data.length;
    for(i; i<len; i++) {
        htmlString = "<p>" + data[i].name + " is a "+ data[i].species + ".</P>";
        animalContainer.insertAdjacentHTML('beforeend',htmlString)
    }   
}