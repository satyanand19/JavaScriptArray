function each(elements, cb) {
    if (!elements) {

        return [];
    }
    else {
        for (let counter = 0; counter < elements.length; counter++) {
            
            cb(elements[counter], counter);
        }

    }
}

function displayElements(eachitem, index) {

    console.log("items[" + index + "] = " + eachitem);
}

module.exports = {
    each,
    displayElements
};