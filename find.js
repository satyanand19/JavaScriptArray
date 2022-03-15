function find(elements, cb) {
    if (!elements) return undefined;  // this is for null and undefined cases

    for (let counter = 0; counter < elements.length; counter++) {
        if (cb(elements[counter], counter, elements)) {
            return elements[counter];
        }
    }
    return undefined;
}

function checkElement(element, index, array) {

    return element === 3 ? true : false;
}

let displayNumber = number => {

    !number ? console.log("not found") : console.log(number);
};

module.exports = {
    find,
    checkElement,
    displayNumber
};