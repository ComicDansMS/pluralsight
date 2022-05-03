// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


// const circle = {
//   label: 'circleX',
//   radius: 2,
// };
//
// const circleArea = ({ radius }) =>
//   (PI * radius * radius).toFixed(2);
//
// console.log(
//   circleArea(circle)
// );


// My code..

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'Dans circle',
    radius: 69
}

const circleArea = ( { radius }, { precision = 4 } = {} ) => 
    (PI * radius * radius ).toFixed(precision);

console.log(
    circleArea(circle, { precision: 5 })
);

