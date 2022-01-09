'use strict'; 
(function() {
  
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    static adultAge = 18;

    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName) {
      var nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isAdult() {
      return this.age >= 18;
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }

    getCourses() {
      return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
    }
  }

  let daniel = new Person('Daniel', 'Holmes', 35);

  let danielStudent = Student.fromPerson(daniel);

  display(danielStudent);

})(); 

/*

SUMMARY


- We create new classes with the 'class' keyword.
- We can create new instances of the class with the 'new' keyword.
- The constructor is used to initialise property values.
- Getter and setter properties are easier to create than using Object.defineProperty when working with prototypes.
- Methods are also easy to create.
- We can create static properties and methods using the 'static' keyword.
- Inheritence is easy with the 'extends' keyword
- We can call parent class constructors with the 'super' function


*/