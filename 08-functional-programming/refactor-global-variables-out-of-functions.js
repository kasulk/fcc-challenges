// The global variable
const bookList = [
  "The Hound of the Baskervilles", 
  "On The Electrodynamics of Moving Bodies", 
  "Philosophiæ Naturalis Principia Mathematica", 
  "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

  return [...bookList, bookName]
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {

    return bookList.filter(book => book !== bookName)

    // Change code above this line
}