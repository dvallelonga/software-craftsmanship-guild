// Interfaces.

var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

// CompositeForm class

var CompositeForm = function() { // implements Composite, FormItem
   // ...
};

// Implement the Composite interface.

CompositeForm.prototype.add = function(child) {
    ...
};
CompositeForm.prototype.remove = function(child) {
    ...
};
CompositeForm.prototype.getChild = function(index) {
    ...
};

// Implement the FormItem interface.

CompositeForm.prototype.save = function() {
    ...
};

/*** USAGE: ***/

var regForm = new CompositeForm();
addForm(regForm);

function addForm(formInstance) {
  Interface.ensureImplements(formInstance, Composite, FormItem);
  // This function will throw an error if a required method is not implemented,
  // halting execution of the function.
  // All code beneath this line will be executed only if the checks pass.
  // ...

  // Interface.ensureImplements provides a safety to ensure the formInstance object
  // has the methods add and save.  This is duck typing...
  // If it walks like a duck, it quacks like a duck, it's a duck. In other words, if 
  // it has duck behavior, it is a duck. 
  formInstance.add();
  formInstance.save();

  // formInstance in this case has Composite behavior (add) and FormItem behavior (save)
}