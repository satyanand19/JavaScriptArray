let finalFlatternArray = [];
function flatten(elements) {
    if (!elements) {
        return [];
    }
    else {
        let flattenArray = [];
        for (let counter = 0; counter < elements.length; counter++) {
            finalFlatternArray = [];

            flattenArray = Array.isArray(elements[counter]) ? flattenArray.concat(checkEachElement(elements[counter])) :
                flattenArray.concat(elements[counter]);

        }
        return flattenArray;

    }
}

function checkEachElement(ArrayOrElement) {

    if (Array.isArray(ArrayOrElement)) {
        for (let i = 0; i < ArrayOrElement.length; i++) {
            checkEachElement(ArrayOrElement[i]);
        }
        return finalFlatternArray;

    }
    else {
        finalFlatternArray.push(ArrayOrElement);

    }

}
function displayArray(array) {
    console.log(array);
}

module.exports = {
    flatten,
    checkEachElement,
    displayArray
};