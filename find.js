function find(elements, cb) {
    if (!elements) return undefined;  // this is for null and undefined cases

    for (let counter = 0; counter < elements.length; counter++) {
        if (cb(elements[counter])) {
            return elements[counter];
        }
    }
    return undefined;
}

function isCheck(eachItem) {

    return eachItem === 3 ? true : false;
}

let printNumber = number => {

    !number ? console.log("not found") : console.log(number);
};

module.exports = {
    find,
    isCheck,
    printNumber
};