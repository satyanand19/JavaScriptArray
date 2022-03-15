let testObject = require('./filter');

const evenNumberElements = [2, 4, 6, 8, 10, 12];
const emptyElements = [];
const oddNumberElements = [1, 3, 5, 7, 9, 99];
const primeElements = [2,3,5,7,11,13,17,19];
const nullElements = null;
const undefinedElements = undefined;

testObject.displayPrimeArray(testObject.filter(evenNumberElements,testObject.checkPrime));
testObject.displayPrimeArray(testObject.filter(emptyElements,testObject.checkPrime));
testObject.displayPrimeArray(testObject.filter(oddNumberElements,testObject.checkPrime));
testObject.displayPrimeArray(testObject.filter(primeElements,testObject.checkPrime));
testObject.displayPrimeArray(testObject.filter(nullElements,testObject.checkPrime));
testObject.displayPrimeArray(testObject.filter(undefinedElements,testObject.checkPrime));
