let testObject = require('./map');
let eachObject = require('./each');

const evenNumberElements = [2, 4, 6, 8, 10, 12];
const emptyElements = [];
const oddNumberElements = [1, 3, 5, 7, 9, 99];
const primeElements = [2,3,5,7,11,13,17,19];
const nullElements = null;
const undefinedElements = undefined;

eachObject.each(testObject.map(evenNumberElements, testObject.transformation), eachObject.displayElements);
eachObject.each(testObject.map(emptyElements, testObject.transformation), eachObject.displayElements); // return empty array
eachObject.each(testObject.map(oddNumberElements, testObject.transformation), eachObject.displayElements);
eachObject.each(testObject.map(primeElements, testObject.transformation), eachObject.displayElements);
eachObject.each(testObject.map(nullElements, testObject.transformation), eachObject.displayElements); // return empty array
eachObject.each(testObject.map(undefinedElements, testObject.transformation), eachObject.displayElements); // return empty array
