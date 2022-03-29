//Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

//Add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create tr element 
  const row = document.createElement('tr');
  //Insert calls
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="a" class="delete">X</a></td>
  `;
  
  list.appendChild(row);
}

//show alert
UI.prototype.showAlert = function(message, className) {
  //Create div
  const div = document.createElement('div');
  //Add classes
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  //get parent 
  const container = document.querySelector('.container');
  //get form
  const form = document.querySelector('#book-form');
  //Insert Alert
  container.insertBefore(div, form);
  //Timout after 3sec
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

//Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value

  //Instantiate a book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //validate
  if(title === '' || author === '' || isbn === ''){
    //error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
      //Add Book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert('Book was successfully added', 'success');

    //Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});