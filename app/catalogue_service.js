// eslint-disable-next-line no-unused-vars
const catalogue = [ 
{title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
{title: "Dracula", author: "Bram Stoker", quantity: 0},
{title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9},
{title: "Wolf Hall", author: "Hilary Mantel", quantity: 33},
{title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31},
{title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11},
{title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8},
{title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43},
{title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12},
{title: "Conversations With Friends", author: "Sally Rooney", quantity: 1},
{title: "Normal People", author: "Sally Rooney", quantity: 2},
{title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6},
{title: "2666", author: "Robert Bolaño", quantity: 17},
{title: "By Night In Chile", author: "Robert Bolaño", quantity: 8},
{title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3},
{title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
{title: "Great Expectations", author: "Charles Dickens", quantity: 1},
{title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8},
{title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19},
{title: "The Origin of Species", author: "Charles Darwin", quantity: 50},
];

function countBooksByAuthor(author) {
 //This function should return the total number of books in the catalogue written by the given author.
 if (typeof author !== "string") {
  return 0;
}
 //make variable to store the total number of books
let total = 0;
//loop through array
//check if author name matches given name
//add total number of books 
 catalogue.forEach(book => {
  if (book.author === author) {
    total++;
  }
 });
return total;
}

function checkBookByTitle(title) {
  // returns true if the book exists
  return catalogue.some(book => {
    if(book.title === title) {
return true;
    }
  });
}

function countBooksByFirstLetter(letter) {
  // This function should receive a letter as an argument (e.g. "H")
    //For example: countBooksByFirstLetter("W"); // returns 2
  //return the total number of books that begin with this letter. 

  //variable to store number of books with given letter
  let total = 0;
  //loop through array
  //check if given letter matches book first character
  //if there's a match add to total
  catalogue.forEach(book => {
    const firstChar = book.title.charAt(0).toUpperCase();
    if (firstChar === letter.toUpperCase()) {
      total++;
    }
  });
  return total;
}

function getQuantity(title) {
  // This function should receive a title as an argument (e.g. "The Origin of Species")
  // return the quantity of this item which is in stock
  let total = 0;
  catalogue.forEach(book => {
    if (book.title.toUpperCase().search(title.toUpperCase()) >= 0) {
      total = book.quantity;
    }
  });
  return total;
}

function getBooksByAuthor(author) {
  // This function should receive an author as an argument (e.g. "Robert Bolaño")
  // return an array of books by the author

  // store returned books in an array
  let total = [];
  //loop through the array catalogue
  //search for a match with the given author
  //make a new array returning the books by the author searched
  catalogue.forEach(book => {
    if (book.author.toUpperCase().search(author.toUpperCase()) >= 0) {
      total = [...total, {title: book.title, author: book.author, quantity: book.quantity}];
    }
  });
  return total;
}

function checkQuantity(title, quantity) {
  // This function should receive a title and a quantity as an argument (e.g. "By Night In Chile" and 4)
  //return true if there are at least as many books in stock as the given quantity
  //return false otherwise. 

  return catalogue.some(book => {
    if(book.title === title && book.quantity >= quantity) {
    return true;
    }
  });
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
