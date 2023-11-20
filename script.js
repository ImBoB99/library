const myLibrary = [
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "pages": 295,
    },

    {
        "title": "Some Guy",
        "author": "Martin Luther",
        "pages": 365,
    },

    {
        "title": "Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "pages": 482,
    },
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages) {
        let book = new Book(bookTitle, bookAuthor, bookPages);
        myLibrary.push(book);
        updateBookList(book);
}

function updateBookList(book) {
    const booksGrid = document.querySelector(".books-grid");

    const singleBook = document.createElement("div");
    singleBook.classList.add("book");

    const bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.textContent = book.pages;

    singleBook.appendChild(bookTitle);
    singleBook.appendChild(bookAuthor);
    singleBook.appendChild(bookPages);

    booksGrid.appendChild(singleBook);
}

const addBookButton = document.querySelector(".add-book-btn");
const cancelBookButton = document.getElementById("cancel");
const confirmBookButton = document.querySelector(".confirm-button")
const dialog = document.getElementById("bookDialog");

const inputBookTitle = document.getElementById("bookTitle");
const inputBookAuthor = document.getElementById("bookAuthor");
const inputBookPages = document.getElementById("bookPages");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelBookButton.addEventListener("click", () => {
    dialog.close();
})

confirmBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close(addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value));
})