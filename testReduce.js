let testObject = require('./reduce');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = [3242];
const items3 = [1, 2, 10, 30, 50];
const items4 = [100, 200, 300];
const items5 = null;
const items6 = undefined;

testObject.printValue(testObject.reduce(items, testObject.sumofAllElement, 0));
testObject.printValue(testObject.reduce(items1, testObject.sumofAllElement, 0)); // return zero
testObject.printValue(testObject.reduce(items2, testObject.sumofAllElement, 0)); 
testObject.printValue(testObject.reduce(items3, testObject.sumofAllElement, 0)); 
testObject.printValue(testObject.reduce(items4, testObject.sumofAllElement, 0));
testObject.printValue(testObject.reduce(items5, testObject.sumofAllElement, 0)); // return zero
testObject.printValue(testObject.reduce(items6, testObject.sumofAllElement, 0)); // return zero