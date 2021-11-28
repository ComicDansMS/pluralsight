'use strict'; 
(function() {
  
  function food(name, type, carbohydrate, fibre, sugar, protein, fat) {
    this.name = name,
    this.type = type
    this.carbohydrate = carbohydrate,
    this.fibre = fibre,
    this.sugar = sugar
    this.protein = protein,
    this.fat = fat,
    this.isHealthy = function() { return this.sugar < 15 && this.carbohydrate / this.fibre < 10 }
  }

  let banana = new food('Banana', 'fruit', 23, 2.6, 12, 1, 0);

  for (let propertyName in banana) {
    display(propertyName + ': ' + banana[propertyName])
  }

  display(banana.isHealthy())




})(); 