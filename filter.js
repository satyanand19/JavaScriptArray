function filter(elements, cb) {

    if (!elements)  //this is for null and undefined cases
        return [];

    let PrimeArray = [];
    for (let counter = 0; counter < elements.length; counter++) {
        if (cb(elements[counter], counter, elements)) {
            PrimeArray.push(elements[counter]);
        }
    }
    return PrimeArray;
}

function checkPrime(Item, index, array) {
    if (Item === 1 || Item === 0) {
        return false;
    }
    for (let counter = 2; counter * counter <= Item; counter++) {
        if (Item % counter === 0)
            return false;
    }
    return true;


}

function displayPrimeArray(primeArray) {
    if (!primeArray.length) {
        console.log("Empty Array");
    }
    else {
        console.log("These are the prime Numbers : ")
        for (let counter = 0; counter < primeArray.length; counter++) {
            console.log(primeArray[counter]);
        }
    }

}

module.exports = {
    filter,
    checkPrime,
    displayPrimeArray
};