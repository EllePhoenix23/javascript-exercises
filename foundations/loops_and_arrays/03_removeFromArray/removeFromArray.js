const removeFromArray = function(arr, ...otherValues) { // The '...' is the rest operator used for an unknown number of other arguments
    return arr.filter(x => !otherValues.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
