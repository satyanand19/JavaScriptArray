function each(elements, cb) {
    if (Array.isArray(elements)) {

        for (let counter = 0; counter < elements.length; counter++) {
            cb(elements[counter], counter);
        }
    }
    else {
        return [];
    }
}

function cb(eachitem, index) {

    console.log("items[" + index + "] = " + eachitem);
}

module.exports = {
    each,
    cb
};