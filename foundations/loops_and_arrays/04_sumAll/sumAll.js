const sumAll = function(a, b) {
    // Set up arithmatic series formula
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const nth = (max - min) + 1 
    if (Number.isInteger(a) && Number.isInteger(b) && Math.sign(a, b) === 1) {
        return nth * ((min + max) / 2);
    } else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
