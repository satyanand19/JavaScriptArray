let testObject = require('./reduce');

const evenNumberElements = [1,2,3];
const emptyElements = [];
const oddNumberElements = [1, 3, 5, 7, 9, 99];
const primeElements = [2,3,5,7,11,13,17,19];
const nullElements = null;
const undefinedElements = undefined;

testObject.displayValue(testObject.reduce(evenNumberElements, testObject.sumofAllElement,5));
testObject.displayValue(testObject.reduce(emptyElements, testObject.sumofAllElement,{})); // return zero
testObject.displayValue(testObject.reduce(oddNumberElements, testObject.sumofAllElement, 0)); 
testObject.displayValue(testObject.reduce(primeElements, testObject.sumofAllElement, 0)); 
testObject.displayValue(testObject.reduce(nullElements, testObject.sumofAllElement, null));  //return zero
testObject.displayValue(testObject.reduce(undefinedElements, testObject.sumofAllElement, undefined)); // return zero
