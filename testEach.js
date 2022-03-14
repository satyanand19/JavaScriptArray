let testObject = require('./each');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = [10, 11, 12, 13, 14, 99];
const items3 = ["red", "blue", "green", "yellow"];
const items4 = null;
const items5 = undefined;

testObject.each(items, testObject.cb);
testObject.each(items1, testObject.cb);  //return empty array
testObject.each(items2, testObject.cb);
testObject.each(items3, testObject.cb);
testObject.each(items4, testObject.cb);
testObject.each(items5, testObject.cb);