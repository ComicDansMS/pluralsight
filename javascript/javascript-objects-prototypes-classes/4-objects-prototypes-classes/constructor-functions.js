'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName;
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
