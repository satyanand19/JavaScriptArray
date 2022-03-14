let testObject = require('./map');
let eachObject = require('./each');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = [-1, 2, 3, -8];
const items3 = [1.2, 3.4, 8, 0, 5, 7];
const items4 = null;
const items5 = undefined;

eachObject.each(testObject.map(items, testObject.transformation), eachObject.cb);
eachObject.each(testObject.map(items1, testObject.transformation), eachObject.cb); // return empty array
eachObject.each(testObject.map(items2, testObject.transformation), eachObject.cb);
eachObject.each(testObject.map(items3, testObject.transformation), eachObject.cb);
eachObject.each(testObject.map(items4, testObject.transformation), eachObject.cb); // return empty array
eachObject.each(testObject.map(items5, testObject.transformation), eachObject.cb); // return empty array
