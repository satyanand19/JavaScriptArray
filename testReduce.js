let testObject = require('./reduce');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = 3242;
const items3 = "abc";
const items4 = [100, 200, 300];

testObject.printValue(testObject.reduce(items, testObject.sumofAllElement, 0));
testObject.printValue(testObject.reduce(items1, testObject.sumofAllElement, 0)); // return zero
testObject.printValue(testObject.reduce(items2, testObject.sumofAllElement, 0)); // return zero
testObject.printValue(testObject.reduce(items3, testObject.sumofAllElement, 0)); // return zero
testObject.printValue(testObject.reduce(items4, testObject.sumofAllElement, 0));