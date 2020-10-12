
// SELECT BY DOCUMENT
// ------------------
// console.dir(document)
// console.log(document.links);
// console.log(document.title);
// console.log(document.URL);
// document.title = 'Hello World'
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'This header is  changed  by JavaScripts'
// document.all[10].innerHTML = 'This header is  changed  by JavaScripts'
// console.log(document.images);
// console.log(document.forms[0]);




// ID-SELECTOR
// --------------
// var mainheader = document.getElementById('main-header');
// console.log(mainheader);
// console.log(mainheader.innerText);
// console.log(mainheader.innerHTML);
// mainheader.innerText = 'Changed by js  innerText';
// mainheader.innerHTML = 'Changed by js innerHTML';
// mainheader.innerHTML = '<h3>Hello! it changed now!</h3>';
// console.log(mainheader.innerHTML);



// SELECT BY CLASS NAME
// -----------------
// var header = document.getElementsByClassName('header');
// console.log(header);
// header[0].style.borderBottom = "3px solid #001";
// // header.style.borderBottom = "solid 3px #123 !important"
// var items = document.getElementsByClassName('item');
// console.log(items);
// console.log(items[1]);
// console.log(items[0].innerText);
// for(i=0; i<items.length; i++){
//     items[i].innerText = 'Hello ' + (i+1);
// }



// SELECT BY TAG NAME
// ----------------
// var items = document.getElementsByTagName('');
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// console.log(items[0].innerText);
// for(i=0; i<items.length; i++){
//     items[i].innerText = 'Hello ' + (i+1);
//     items[i].style.backgroundColor = "#585"
//     items[i].style.marginBottom = "2px"
// }





// QUERY SELECTOR
// ---------------------

// var headers = document.querySelector('.section-header');
// headers.style.borderBottom = "solid 3px black";
// // "Note: If there are more item in query selector , the change will apply only for first element"
// var input = document.querySelector('input');
// input.value = "This value is provided by javaScript";
// var submit_button = document.querySelector('button');
// console.log(submit_button);
// submit_button.innerText = "Add Now";
// var items = document.querySelector('.item:last-child');
// console.log(items);

// var item = document.querySelector('.item:nth-child(5)');
// // console.log(items);
// item.style.backgroundColor = "#555"

// var items = document.querySelector('.item:nth-child(0)');
// console.log(items);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(i=0;i<odd.length; i++){
//     odd[i].style.backgroundColor = "#777"
//     even[i].style.backgroundColor = "#999"
// }


