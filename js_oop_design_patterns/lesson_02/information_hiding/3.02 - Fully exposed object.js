/**
 * Class Constructor with configuration parameters
 * - Set parameter values to instance properties
 */

 /* "We call this the fully exposed object because all of the class's attributres are public and accessible."
    "The public attributes are created using the this keyword"
    - page 27, Harmes & Diaz 
*/

var Book = function (isbn, title) {
  if(isbn == undefined) throw new Error('Book constructor requires an isbn.');
  this.isbn = isbn;
  this.title = title || 'No title specified';
};

Book.prototype.display = function () {
  // ...
};

/* ========================================================= */

/* With mutators (getters) and accessors (setters). */

/* mutator methods will set the value of an attribute */
/* accessor methods will retrieve the value of an attribute */

/* "Using mutators, you can implement any kind of verification you like before you actually
    assign a new value to an attribute."
    -page 29, Harmes & Diaz 
*/

/* Interface demonstrates which methods other programmers should interfact with */
var Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle',
  'setTitle', 'getAuthor', 'setAuthor', 'display']);

var Book = function (isbn, title) {
  this.setIsbn(isbn);
  this.setTitle(title);
  this.setAuthor(author);
};

Book.prototype = {
  checkIsbn: function(isbn) {
    // logic to determine if isbn is valid

    return true; // If all tests passed else returns false in a failing test
  },

  // get isbn property value
  getIsbn: function () {
    return this.isbn;
  },
  // set isbn property value
  setIsbn: function (isbn) {
    if (!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
    this.isbn = isbn;
  },

  // get title property value
  getTitle: function () {
    return this.title;
  },
  // set title property value
  setTitle: function (title) {
    this.title = title || 'No title specified';
  },

  display: function() {
    // ...
  }
};

/* Other programmers ~should~ only use the getters and setters defined in an Interface, 
   so attribute validation is not bypassed by directly setting the value of an attribute 
   e.g. ob.setAttr("value").
   However, since the attributes isbn and title are still exposed publically, they may be
   directly accessed e.g. obj.attr = "value". */
