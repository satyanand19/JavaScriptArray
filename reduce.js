function reduce(elements, cb, startingValue) {
    if (Array.isArray(elements)) {

        for (let counter = 0; counter < elements.length; counter++) {
            startingValue = cb(startingValue, elements[counter]);

        }
        return startingValue;
    }
    else {
        return 0;
    }
}

function sumofAllElement(startvalue, eachItem) {

    return startvalue + eachItem;
}

function printValue(sumResult) {

    !sumResult ? console.log("Invalid Input") : console.log("Sum of all the element of array : " + sumResult);

}

module.exports = {
    reduce,
    sumofAllElement,
    printValue
}