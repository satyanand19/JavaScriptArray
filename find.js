function find(elements, cb) {
    if (Array.isArray(elements)) {
        for (let counter = 0; counter < elements.length; counter++) {
            if (cb(elements[counter])) {
                return elements[counter];
            }
        }
        return undefined;
    }
    else {
        return undefined;
    }
}

function isCheck(eachItem) {
    if (eachItem === 3) {
        return true;
    }
    else {
        return false;
    }
}

let printNumber = number => {
    if (number == undefined) {
        console.log("not found");
    }
    else {
        console.log(number);
    }
};

module.exports = {
    find,
    isCheck,
    printNumber
};