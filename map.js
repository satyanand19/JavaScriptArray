
function map(elements, cb) {

    if (elements) {
        let mappedArray = [];
        for (let counter = 0; counter < elements.length; counter++) {
            mappedArray.push(cb(elements[counter], counter, elements));
        }
        return mappedArray;
    }
    else {
        return [];
    }
}

function transformation(eachItem, index, array) {

    return eachItem * eachItem;
}



module.exports = {
    map,
    transformation
};