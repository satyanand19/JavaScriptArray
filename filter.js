function filter(elements, cb) {
    if (Array.isArray(elements)) {
        let PrimeArray = [];
        for (let counter = 0; counter < elements.length; counter++) {
            if (typeof elements[counter] === 'number' && cb(elements[counter])) {
                PrimeArray.push(elements[counter]);
            }
        }
        return PrimeArray;
    }
    else {
        return [];
    }
}

function isPrime(Item) {
    if (Item == 1 || Item == 0) {
        return false;
    }
    for (let counter = 2; counter * counter <= Item; counter++) {
        if (Item % counter == 0)
            return false;
    }
    return true;
}

function printprime(primeArray) {
    if (primeArray.length == 0) {
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
    isPrime,
    printprime
};