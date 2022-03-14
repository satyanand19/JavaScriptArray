
function map(elements, cb) {

    if (elements) {
        let mappedArray = [];
        for (let counter = 0; counter < elements.length; counter++) {
            mappedArray.push(cb(elements[counter]));
        }
        return mappedArray;
    }
    else {
        return [];
    }
}

function transformation(eachItem) {

    return eachItem * eachItem;
}



module.exports = {
    map,
    transformation
};