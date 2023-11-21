const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggleRead = function() {
        this.read = !this.read;
    }
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
        let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
        myLibrary.push(book);
        updateBookList(book, myLibrary.length - 1);
}

function updateBookList(book, index) {
    const booksGrid = document.querySelector(".books-grid");

    const singleBook = document.createElement("div");
    singleBook.classList.add("book");
    singleBook.setAttribute("data-index", index);

    const bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.textContent = book.pages;

    // Button to toggle read status
    const toggleReadButton = document.createElement("button");
    toggleReadButton.innerText = book.read ? "Read" : "Not Read";
    toggleReadButton.classList.add(book.read ? "read" : "unread");
    toggleReadButton.addEventListener("click", () => {
        book.toggleRead(); // Toggle the book's read status
        renderBooks(); // Update the display after toggling the status
    });
    

    const bookDelete = document.createElement("button");
    bookDelete.classList.add("delete-button");
    bookDelete.innerText = "Delete Book";
    bookDelete.addEventListener("click", (e) => {
        const index = e.target.parentElement.getAttribute("data-index");
        removeBook(index);
    })

    singleBook.appendChild(bookTitle);
    singleBook.appendChild(bookAuthor);
    singleBook.appendChild(bookPages);
    singleBook.appendChild(toggleReadButton);
    singleBook.appendChild(bookDelete);

    booksGrid.appendChild(singleBook);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

function renderBooks() {
    const booksGrid = document.querySelector(".books-grid");
    booksGrid.innerHTML = "";

    myLibrary.forEach((book, index) => {
        updateBookList(book, index);
    });
}

const addBookButton = document.querySelector(".add-book-btn");
const cancelBookButton = document.getElementById("cancel");
const confirmBookButton = document.querySelector(".confirm-button")
const dialog = document.getElementById("bookDialog");

const inputBookTitle = document.getElementById("bookTitle");
const inputBookAuthor = document.getElementById("bookAuthor");
const inputBookPages = document.getElementById("bookPages");
const inputBookRead = document.getElementById("bookRead");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelBookButton.addEventListener("click", () => {
    dialog.close();
})

confirmBookButton.addEventListener("click", (event) => {
    event.preventDefault();

    const isBookRead = inputBookRead.checked;

    dialog.close();
    addBookToLibrary(inputBookTitle.value, inputBookAuthor.value, inputBookPages.value, isBookRead);
})