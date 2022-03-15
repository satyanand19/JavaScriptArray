let testObject = require('./find');

const evenNumberElements = [2, 4, 6, 8, 10, 12];
const emptyElements = [];
const oddNumberElements = [1, 3, 5, 7, 9, 99];
const primeElements = [2,3,5,7,11,13,17,19];
const nullElements = null;
const undefinedElements = undefined;


testObject.displayNumber(testObject.find(evenNumberElements, testObject.checkElement));
testObject.displayNumber(testObject.find(emptyElements, testObject.checkElement));
testObject.displayNumber(testObject.find(oddNumberElements, testObject.checkElement));
testObject.displayNumber(testObject.find(primeElements, testObject.checkElement));
testObject.displayNumber(testObject.find(nullElements, testObject.checkElement));
testObject.displayNumber(testObject.find(undefinedElements, testObject.checkElement));