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

function addBookToLibrary() {
    // do stuff here
}

function updateBookList() {
    const booksGrid = document.querySelector(".books-grid");
    myLibrary.forEach(function (book) {


        const singleBook = document.createElement("div");
        singleBook.classList.add("book");

        const bookTitle = document.createElement("p")
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("p")
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement("p")
        bookPages.textContent = book.pages;

        singleBook.appendChild(bookTitle);
        singleBook.appendChild(bookAuthor);
        singleBook.appendChild(bookPages);

        booksGrid.appendChild(singleBook);

    })

}

const addBookButton = document.querySelector(".add-book-btn")

updateBookList();