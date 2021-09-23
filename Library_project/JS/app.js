// create a bookShelf constructor
function bookShelf(bookName, authorName, genre) {
  this.name = bookName;
  this.author = authorName;
  this.genre = genre;
}

//create a showBookShelf constructor
function showBookShelf() {}

//add methods to showBookShelf's prototype
showBookShelf.prototype.add = function (book) {
  console.log("Rankit");
  let tableBody = document.getElementById("tableBody");
  let bookTable = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td> <button type="button" class="btn btn-primary">delete book</button> </td>
</tr>`;
  tableBody.innerHTML = tableBody.innerHTML + bookTable;
};
// adding clear method in showBookShelf
showBookShelf.prototype.clear = function () {
  let formSubmit = document.getElementById("formSubmit");
  formSubmit.reset();
};

//adding validate function
showBookShelf.prototype.validate = function(book){
  if(book.name.length<2 || book.author.length<2){
    return false;
  }
  else{
    return true;
  }
}

//adding show function
showBookShelf.prototype.show = function(type, showMessage){
  let message = document.getElementById('msg');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${showMessage}</strong> .
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`

setTimeout(function(){
  message.innerHTML = '';
}, 1500);
}

//add event listner on put book on the shelf button
let formSubmit = document.getElementById("formSubmit");
formSubmit.addEventListener("submit", submitBookForm);

//make a function which calls while submit
function submitBookForm(event) {
  event.preventDefault();
  console.log("You have clieckd on add book to the shelf");
  let bookName = document.getElementById("bName").value;
  let authorName = document.getElementById("aName").value;
  let genre;
  let siFI = document.getElementById("si-fi");
  let religious = document.getElementById("religious");
  let tech = document.getElementById("tech");
  let horror = document.getElementById("horror");
  let romance = document.getElementById("romance");
  let crime = document.getElementById("crime");
  let action = document.getElementById("action");
  let history = document.getElementById("history");
  let classics = document.getElementById("classics");
  let autoBio = document.getElementById("autoBio");
  let cookBooks = document.getElementById("cookBooks");
  let poetry = document.getElementById("poetry");
  let other = document.getElementById("other");

  if (siFI.checked) {
    genre = siFI.value;
  } else if (religious.checked) {
    genre = religious.value;
  } else if (tech.checked) {
    genre = tech.value;
  } else if (horror.checked) {
    genre = horror.value;
  } else if (romance.checked) {
    genre = romance.value;
  } else if (crime.checked) {
    genre = crime.value;
  } else if (action.checked) {
    genre = action.value;
  } else if (history.checked) {
    genre = history.value;
  } else if (classics.checked) {
    genre = classics.value;
  } else if (autoBio.checked) {
    genre = autoBio.value;
  } else if (cookBooks.checked) {
    genre = cookBooks.value;
  } else if (poetry.checked) {
    genre = poetry.value;
  } else if (other.checked) {
    genre = other.value;
  }

  //create a bookshelf object
  let book = new bookShelf(bookName, authorName, genre);
  let play = new showBookShelf();

  if(play.validate(book))
  {
    play.add(book);
    play.clear();
    play.show();
    play.show('success', "your book has been put on shelf")
  }
  else{
    play.show("danger", "Please bring the real book");
  }
}
