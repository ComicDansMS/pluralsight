'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];

    this.enroll = function(courseId) {
      this._enrolledCourses.push(courseId)
    };

    this.getCourses = function() {
      return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
    };
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  let daniel = new Student('Daniel', 'Holmes', 35);

  daniel.enroll('Learn to be cool');
  daniel.enroll('Fly with the kids');
  daniel.enroll('How to not give a fuck');
  display(daniel);
  
  display(daniel.getCourses());
  
})(); 


/*

KEY TAKEAWAYS

- Functions have prototypes
  - These prototypes point to objects in memory
  - When you create new objects from those constructor functions, their prototypes point to the same object in memory. It's the same instance.

- Object prototypes can have properties
- When asking for a property value of an object, it will check the object first and then the prototype if the object does not have the property.
  - Any new objects created from constructor functions will inherit any properties set on the prototype, unless they have that property set.

- We learnt how to setup inheritence with constructor functions by setting the prototype of one function by the prototype of another function.
- We can initialise the parent classes properties by calling its function using the .call() function and passing through the context of 'this'


*/