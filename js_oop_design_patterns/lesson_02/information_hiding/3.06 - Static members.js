var Book = (function() {
  
  // Private static attributes.
  /*** 
    What needs to be done here to create a private static attribute? 
  ***/

  // Private static method.
  /*** 
    What needs to be done here to create a private static method? 
  ***/

  // Return the constructor.
  return function(newIsbn, newTitle) {

    // ... Private attributes
    var isbn, title;

    // ... Privileged methods
    this.getIsbn = function () {
      return isbn;
    };
    this.setIsbn = function (newIsbn) {
      if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
      isbn = newIsbn;
    };

    this.getTitle = function() {
      return title;
    };
    this.setTitle = function (newTitle) {
      var noTitle = 'No Title Specified';

      title = newTitle || noTitle;

      // Set title to title case if title does not equal noTitle
      if (title !== noTitle) {
        /*** 
          What needs to be done here? 
        ***/
      }
    };

    // Keep track of how many Books have been instantiated with the private static attribute.
    /***
      What needs to be done here?
    ***/

    // ... Call privileged methods
  }
})();

// Public static method.
Book.convertToTitleCase = function(inputString) {
  // ... manipulate inputString and return inputString
};

// Public, non-privileged methods.
Book.prototype = {
  display: function() {
    // ...
  },
};