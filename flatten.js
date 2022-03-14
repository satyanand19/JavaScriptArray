let arr = [];
function flatten(elements) {
    if (Array.isArray(elements)) {
        let flattenArray = [];
        for (let counter = 0; counter < elements.length; counter++) {
            arr = [];

            flattenArray = Array.isArray(elements[counter]) ? flattenArray.concat(findEachElement(elements[counter])) :
                flattenArray.concat(elements[counter]);

        }
        return flattenArray;
    }
    else {
        return [];
    }
}

function findEachElement(ArrayOrElement) {

    if (Array.isArray(ArrayOrElement)) {
        for (let i = 0; i < ArrayOrElement.length; i++) {
            findEachElement(ArrayOrElement[i]);
        }
        return arr;
    }
    else {
        arr.push(ArrayOrElement);
    }

}
function printArray(array) {
    console.log(array);
}

module.exports = {
    flatten,
    findEachElement,
    printArray
};