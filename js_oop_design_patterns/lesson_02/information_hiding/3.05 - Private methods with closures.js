/* Back to the problem of the public mutators and accessors: 
   We want the isbn and title attributes to be private to the Book class internally */

/* Attributes and methods declared within a Constructor are only accessible
   within the scope of the constructor function. */

var Book = function(newIsbn, newTitle) { // implements Publication

  /*** 
    What needs to be done here to make isbn and title private? 
  ***/

  /*** 
    What needs to be done here to make checkIsbn private? 
  ***/ 

  // Privileged methods, because they have access to private attributes and methods
  // Privileged have access to private data but are still exposed publically
  this.getIsbn = function() {
    return isbn;
  };
  this.setIsbn = function(newIsbn) {
    if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
    isbn = newIsbn;
  };

  this.getTitle = function() {
    return title;
  };
  this.setTitle = function(newTitle) {
    title = newTitle || 'No title specified';
  };

  // Constructor code.
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
};

// Public, non-privileged methods.
Book.prototype = {
  display: function() {
    // ...
  }
};

var huckFinn = new Book("012345-67890", "Huckleberry Finn");

/***
  What needs to be done to update the title of the huckFinn instance to "The Adventures of Huckleberry Finn"?
***/

/***
  What needs to be done to get the new title of the huckFinn instance?
***/