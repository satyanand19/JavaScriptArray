let testObject = require('./find');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = "abc";
const items3 = [1, 2, 6, 4, 5, 5, 87, 3];
const items4 = ["a", "b", "c"];
const items5 = null;
const items6 = undefined;

testObject.printNumber(testObject.find(items, testObject.isCheck));
testObject.printNumber(testObject.find(items1, testObject.isCheck));
testObject.printNumber(testObject.find(items2, testObject.isCheck));
testObject.printNumber(testObject.find(items3, testObject.isCheck));
testObject.printNumber(testObject.find(items4, testObject.isCheck));
testObject.printNumber(testObject.find(items5, testObject.isCheck));
testObject.printNumber(testObject.find(items6, testObject.isCheck));