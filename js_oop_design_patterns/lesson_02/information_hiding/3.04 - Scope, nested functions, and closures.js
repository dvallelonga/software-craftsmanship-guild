
function cat() {
  var cats = 10;
 
  function kitty() {
    cats *= 2;
  }
   
  kitty(); 
  return cats;
}

function dog() {
  var dogs = 10;
 
  function puppy() {
    dogs *= 2;
    return a;
  }
   
  return puppy;      
}

var fluffy = cat();
fluffy(); // Uncaught TypeError: Property 'fluffy' of object [object Object] is not a function

// fluffy equals 20 from the return value of "cats" and is not a reference to the cat or kitty reference function

var fido = dog(); // fido is now a reference to function puppy. the puppy function was not yet called
fido(); // returns 20  /*** Why is this value only 20 and not 40? ***/
fido(); // returns 40
fido(); // returns 80

var rover = dog(); // rover is another reference to bar.
rover(); // returns 20 /*** Why is this value only 20 and not 160? ***/ 

/* "Closures are possible because functions run in the scope they are defined in
    (in this case, the scope within the dog function), rather than the scope they
    are defined in. As long as the puppy function is defined within dog, it has to
    all of dog's variables, even if dog is finished executing.

    After dog returns, its scope is saved, and only the function that it reutnrs
    has access to it. In the example above, fido and rover each have a copy of this
    scope and a copy of the dogs variable that only they can modify."
    -page 33, Harmes & Diaz (paraphrased)
*/