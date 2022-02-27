// const [first, ...restOfItems] = [10, 20, 30, 40];

// const data = {
//   temp1: '001',
//   temp2: '002',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const { temp1, temp2, ...person } = data;

// const newArray = [...restOfItems];

// const newObject = {
//   ...person,
// };


// My code..

const [first, ...restOfItems] = [10, 20, 30, 40, 50, 60];

const data = {
    temp1: '203',
    temp2: '592',
    firstName: 'Daniel',
    lastName: 'Holmes'
}

const { temp1, temp2, ...person } = data;

const newArray = [...restOfItems];

const newObject = {
    ...person
}

console.log(newObject)