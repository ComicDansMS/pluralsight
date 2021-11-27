'use strict'; 
(function() {
  
  function Person(firstName, lastName, sex, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.sex = sex,
    this.age = age,
    this.isAdult = function() { return this.age >= 18; }
  }

  function Venue(name, city, restricted) {
    this.name = name,
    this.city = city,
    this.restricted = restricted
  }

  let daniel = new Person('Daniel', 'Holmes', 'male', 35);
  let Palita = new Person('Palita', 'Holmes', 'female', 40);
  let lachlan = new Person('Lachlan', 'Holmes', 'male', 17);
  let dean = new Person('Dean', 'Holmes', 'male', 70);
  let bronwyn = new Person('Bronwyn', 'Holmes', 'female', 72)

  let theNightclub = new Venue('The Pub', 'Adelaide', true)  ;
  let theRestaurant = new Venue('The Restaurant', 'Adelaide', false);


  display(theRestaurant)

})();