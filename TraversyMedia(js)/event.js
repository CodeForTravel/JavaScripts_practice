// Add event listener
// Click event
var button = document.querySelector('#red_button').addEventListener('click',function(){
    var tagName = document.querySelector('body');
    tagName.style.backgroundColor = 'red';
});

var button = document.querySelector('#grey_button').addEventListener('click',function(){
    var tagName = document.querySelector('body');
    tagName.style.backgroundColor = 'grey';
});
var button = document.querySelector('#pink_button').addEventListener('click',function(){
    var tagName = document.querySelector('body');
    tagName.style.backgroundColor = 'pink';
});


// var button = document.querySelector('#button').addEventListener('click',call_function);

// function call_function(e){
//     // console.log(e.target);
//     // console.log(e.target.id); 
//     // console.log(e.target.className);

//     // console e property
//     var output = document.querySelector('#output');
//     // output.innerHTML = '<h3>'+ e.type +'</h3>';
//     // output.innerHTML = '<h3>'+ e.clientX +'</h3>';
//     output.innerHTML = '<h3>'+ e.clientY +'</h3>';
// }






var button = document.querySelector('#button')
var box = document.querySelector('#box')
var select = document.querySelector('select');
var form = document.querySelector('form');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// box.addEventListener('mouseenter',runEvent) // only for parent element
// box.addEventListener('mouseleave',runEvent)

// box.addEventListener('mouseover',runEvent)  // mouse over also for any innern element
// box.addEventListener('mouseout',runEvent)

// box.addEventListener('mousemove',runEvent);

// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent)

form.addEventListener('submit',runEvent)

function runEvent(e){
    e.preventDefault()
    console.log('Event type  :' + e.type);

    // var output = document.querySelector('#output');
    // output.innerHTML = e.target.value;

    // output.innerHTML = '<h3> Mouse X :'+ e.offsetX +'</h3> <h3> Mouse Y :'+ e.offsetY +'</h3>';
    // box.style.backgroundColor = "rgb("+ e.offsetX +","+ e.offsetY +",50)"
}
