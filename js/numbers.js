// Парс чяисла с Number.parseInt() и Namber.parseFloat()

let elementWidth = '50px';
const result = Number.parseInt(elementWidth);

console.log(result);
console.log(typeof result);

let elementHeight = '200.97px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight)
