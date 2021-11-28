'use strict'; 
(function() {

  let person ={
    name: {
      first: 'Daniel',
      last: 'Holmes'
    },
    age: 35
  };
  
  Object.defineProperty(person, 'fullName',
  {
    get: function() {
      return this.name.first + ' ' + this.name.last;
    },
    set: function(value) {
      var nameParts = value.split(' ');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    }
  });

  person.fullName = 'Dan Rhys';

  display(person.fullName);
  display(person.name.first);
  display(person.name.last);


  

})(); 

/*

RECAP OF KEY TAKEAWAYS
======================

- We can access properties with dot notation and also bracket notation

  person.firstName;
  person['firstName'];


- This allows us to use variables to access properties on objects

  let propertyName = 'firstName';
  person[propertyName];


- We can use Object.defineProperty to make properties read-only, enumerable, and lock out changing property descriptors

  Object.defineProperty(
    person,
    'firstName',
    {writable: false}
  );

  Object.defineProprty(
    person,
    'firstName',
    {enumerable: false}
  );

  Object.defineProperty(
    person,
    'firstName',
    {configurable: false}
  )


  - We used Object.defineProperty to create getters and setter properties that are properties backed by functions

  Object.defineProperty(
    person,
    'firstName',
    get: function() {
      ...
    },
    set: function() {
      ...
    }
  );

*/