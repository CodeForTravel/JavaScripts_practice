// book class : represent a book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// Ui class : Handle ui task
class UI{
    static displayBooks(){
        
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('.book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td> ${book.title} </td>
            <td> ${book.author} </td>
            <td> ${book.isbn} </td>
            <td><button class="ui red button">X</button></td>
        `;
        list.appendChild(row);
    }

    static clearFormFields(){
        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.isbn').value = '';
    }

    static deleteBook(item){
        if(item.classList.contains('red')){
            item.parentElement.parentElement.remove();
        }
    }

    static showAlert(message , ClassName){
        const newDiv = document.createElement('div');
        newDiv.className = `ui ${ClassName} message`;
        newDiv.appendChild(document.createTextNode(message));
        const container = document.querySelector('.ui.container.main');
        const form = document.querySelector('.ui.form.card');
        container.insertBefore(newDiv,form);

        setTimeout(() => document.querySelector('.message').remove(),3000);
    }
}

// store class : handle storage

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null ){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(data){

        const books = Store.getBooks();
        books.forEach((book, index) => {
            console.log(typeof(data))
            console.log(typeof(book.isbn))

            if(book.isbn === data){
                console.log("hello")
                book.splice(index,1);
            }
            
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// event to display book
document.addEventListener('DOMContentLoaded',UI.displayBooks);

// event to add a book
document.querySelector('.ui.form.card').addEventListener('submit', (e) => {
    // prevent default value
    e.preventDefault();
    //get form data
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const isbn = document.querySelector('.isbn').value;

    // form validation 
    if(title === '' || author === '' || isbn ===''){
        UI.showAlert('Please fill in all field!','red')
    }
    else{
        // instantiate book class on the top
        const book = new Book(title,author,isbn);
        UI.addBookToList(book);
        //add book to store
        Store.addBook(book);
        //show success message
        UI.showAlert('Book Added','green');
        // clear form Field
        UI.clearFormFields();
    }

    
});

// event to remove a book
document.querySelector('.book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    //remove book from store
    // console.log(e.target.parentElement.previousElementSibling.textContent)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show message
    UI.showAlert('Book removed!','purple');

})