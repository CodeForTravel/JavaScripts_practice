// console.log("Test");

// TRAVERSING THE DOM
// ------------------------------------------



// Parent Node
// var item_parent = document.querySelector('.item').parentNode;
// console.log(item_parent.parentNode);
// item_parent.style.border = "solid 1px #444";
// item_parent.style.padding = "20px";
// var item_parent = document.querySelector('.item').parentNode.parentNode.parentNode;
// console.log(item_parent);

// var item_list = document.querySelector('.list');

// Parent Element
// var parent_element = document.querySelector('.item').parentElement.parentElement;
// parent_element.style.backgroundColor = 'pink'
// console.log(parent_element)



// Child selector
// there is a problem with this selector(childNodes) , when there is line break
// var childs = document.querySelector('.list').childNodes;
// console.log(childs)

// var childs = document.querySelector('.list').children;
// console.log(childs)
// childs[0].style.backgroundColor = 'red'


// there is a problem with this selector (firstChild), when there is line break

// console.log(item_list);
// console.log(item_list.firstChild);


// we Shoud use (firstElementChild) instead
// console.log(item_list.firstElementChild)

// siblings
// -------------------
// console.log(item_list.nextSibling)   //do not use this.
// console.log(item_list.nextElementSibling)   // use this.

// console.log(item_list.previousSibling)   //do not use this.
// console.log(item_list.previousElementSibling)   // use this.



// Create An HTML element
// -------------------------------------
// var newDiv = document.createElement('div');
// var create_h1 = document.createElement('h1')
// //add a class to the element
// newDiv.className = "new_dev_class";
// //add a class to the element
// newDiv.id = "new_dev_id";
// //add an attribite
// newDiv.setAttribute('title','new div title');
// // create text node

// var newDivText = document.createTextNode('This HTML tag is created by Js!');
// //add text to div
// create_h1.appendChild(newDivText);
// newDiv.appendChild(create_h1);

// // Add the node to DOM
// var container = document.querySelector('.main-content .ui.container');
// var card = document.querySelector('.card');
// container.insertBefore(newDiv,card);

// console.log(newDiv)



