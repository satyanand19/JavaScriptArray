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

function cb(eachitem, index) {

    console.log("items[" + index + "] = " + eachitem);
}

module.exports = {
    each,
    cb
};