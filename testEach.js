let testObject = require('./each');

const evenNumberItems = [2, 4, 6, 8, 10, 12];
const emptyItems = [];
const oddNumberItems = [1, 3, 5, 7, 9, 99];
const colorItems = ["red", "blue", "green", "yellow"];
const nullItems = null;
const undefinedItems = undefined;

testObject.each(evenNumberItems, testObject.displayElements);
testObject.each(emptyItems, testObject.displayElements);  //return empty array
testObject.each(oddNumberItems, testObject.displayElements);
testObject.each(colorItems, testObject.displayElements);
testObject.each(nullItems, testObject.displayElements);
testObject.each(undefinedItems, testObject.displayElements);