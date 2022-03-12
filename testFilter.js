let testOject = require('./filter');

const items = [1, 2, 3, 4, 5, 5];
const items1 = [];
const items2 = ["ab", "cd"];
const items3 = [0, 1, 3, 13, 65, 73, 31, 97];
const items4 = [3, 7, 11, true, "cat"];

testOject.printprime(testOject.filter(items, testOject.isPrime));
testOject.printprime(testOject.filter(items1, testOject.isPrime));  // return empty array
testOject.printprime(testOject.filter(items2, testOject.isPrime));   // return empty array
testOject.printprime(testOject.filter(items3, testOject.isPrime));
testOject.printprime(testOject.filter(items4, testOject.isPrime));