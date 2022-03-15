let testObject = require('./flatten');

const nestedArray = [1, 0, [2, 3], [[3, 3]], [[[4, 5]]]];
const nestedPrimeArray = [2, [5, 2, 3], [7, 23, [11, 31]]];
const nestedEmptyArray = [];
const nestedStingArray = ["1", "2", "3", ["ab", "cd", ["ef", "gh"]]];
const nestedZeroArray = [[[[[[[0, 0]], 0, 0]], 0]], 0];
const nestedNullArray = [[[[null]]]];
const nestedUndefinedArray = [[[undefined]]];


testObject.displayArray(testObject.flatten(nestedArray));
testObject.displayArray(testObject.flatten(nestedPrimeArray));
testObject.displayArray(testObject.flatten(nestedEmptyArray)); // return as empty array
testObject.displayArray(testObject.flatten(nestedStingArray));
testObject.displayArray(testObject.flatten(nestedZeroArray));
testObject.displayArray(testObject.flatten(nestedNullArray)); 
testObject.displayArray(testObject.flatten(nestedUndefinedArray)); 