let testObject = require('./flatten');

const nestedArray = [1, 0, [2, 3], [[3, 3]], [[[4, 5]]]];
const nestedArray1 = [0, [1, 2, 3], [4, 5, [6, 7]]];
const nestedArray2 = [];
const nestedArray3 = ["1", "2", "3", ["ab", "cd", ["ef", "gh"]]];
const nestedArray4 = [[[[[[[true, false]], 1, 2]], "string"]], 0];

testObject.printArray(testObject.flatten(nestedArray));
testObject.printArray(testObject.flatten(nestedArray1));
testObject.printArray(testObject.flatten(nestedArray2)); //return as empty array
testObject.printArray(testObject.flatten(nestedArray3));
testObject.printArray(testObject.flatten(nestedArray4));