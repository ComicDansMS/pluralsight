
let person1 = { name: 'John', age: 26 };

function greet() {
    return 'My name is ' + this.name + ' and I am ' + this.age + ' years old.';
}

let message = greet.call(person1);

// console.log(message);


///////////////////////////////////////////


let jar = { 
    coins: {
        tenCent: 43,
        twentyCent: 32, 
        fiftyCent: 14, 
        oneDollar: 59, 
        twoDollar: 21 
    },
    value: {
        tenCent: 0.1,
        twentyCent: 0.2, 
        fiftyCent: 0.5, 
        oneDollar: 1, 
        twoDollar: 2 
    }
};

function sumMoney() {
    let total = 0
    
    Object.entries(this.coins).forEach( ([ coin, count ]) => {
        let value = this.value[coin];
        total += count * value;
    })

    return total;
}

let myMoney = sumMoney.call(jar);

// console.log(myMoney);


///////////////////////////////////////////


let shoppingList = [ 'avocados', 'macadamia nuts', 'eggs', 'chocolate', 'cocnut milk', 'peanut butter'];
let badFood = { food: 'chocolate' };

function badFoodFilter(badFood) {
    for ( item of arguments ) {
        if (item === this.food) {
            console.log(item + ' - dont do it!!');
        }
        else {
            console.log(item);
        }
    }
}

badFoodFilter.apply(badFood, shoppingList);



