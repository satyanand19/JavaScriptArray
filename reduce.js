function reduce(elements, cb, startingValue) {
    if (elements) {

        for (let counter = 0; counter < elements.length; counter++) {
            startingValue = cb(startingValue, elements[counter]);

        }
        return startingValue;
    }
    else {
        return 0;
    }
}

function sumofAllElement(sum, eachItem) {

    return sum + eachItem;
}

function displayValue(sumResult) {

    !sumResult ? console.log("Invalid Input") : console.log("Sum of all the element of array : " + sumResult);

}

module.exports = {
    reduce,
    sumofAllElement,
    displayValue
}