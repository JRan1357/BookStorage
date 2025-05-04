let books = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = genId();
};

function genId() {
    return crypto.randomUUID();
}

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

// generates html for bookcard
function createHtml(obj) {
    const display = document.getElementById('bookViewer');
    const div = document.createElement('div');
    let id = obj.id.toString()
    div.id = id;
    console.log('id: ', id, typeof id)
    div.innerHTML = 
        `<p>Title: ${obj.title}</p>
        <p>Author: ${obj.author}</p>
        <p>Pages: ${obj.pages}</p>
        <p>id: ${obj.id}</p>
        <button onclick="toggleRead(this, '${id}')">${obj.read}</button>`

    div.classList.add('bookCard');
    display.appendChild(div);
};

// draws book card
function drawHtml() {
    console.log('drawing html');
    document.getElementById('bookViewer').innerHTML = '';
    books.forEach((item) => {
        createHtml(item)
    });
};

// toggles read status on book card
function toggleRead(button, id) {
    if (button.textContent == 'Unread') {
        button.textContent = 'Read';
    } else {
        button.textContent = 'Unread';
    }
    // update read status in book object
    console.log(this);
    console.log('id: ', id);
    updateObj(id, 'read', button.textContent);
}

//helper function to find obj and update value

function updateObj(targetId, value, newvalue) {
    console.log('target ID: ', targetId);
    let book = books.find(item => item.id = targetId);

    console.log('book:', book);
    console.log('value', book[value]);

    book.value = newvalue;
}