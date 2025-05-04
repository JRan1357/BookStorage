let books = []


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// helper function to get value of element
function getValue(id) {
    return document.getElementById(id).value;
};

// reads values from form
function getValues() {
    console.log("running getValues()");
    let title = getValue('title');
    let author = getValue('author');
    let pages = getValue('pages');
    let read = 'Unread';
    
    //get value of radio button
    const selected = document.querySelector('input[name="hasRead"]:checked');
    if (selected) {
        read = selected.value;
    }


    let book = new Book(title, author, pages, read);

    console.log('book:', book);
    books.push(book);
};

function createHtml(obj) {
    const display = document.getElementById('bookViewer');
    const div = document.createElement('div');
    div.innerHTML = 
        `<p>Title: ${obj.title}</p>
        <p>Author: ${obj.author}</p>
        <p>Pages: ${obj.pages}</p>
        <button onclick="toggleRead()"><p>Read: ${obj.read}</p></button>`

    div.classList.add('bookCard');
    display.appendChild(div);
};

function drawHtml() {
    console.log('drawing html');
    document.getElementById('bookViewer').innerHTML = '';
    books.forEach((item) => {
        createHtml(item)
    });
};

// toggles read status on book card
function toggleRead() {
    alert(this.content);
}