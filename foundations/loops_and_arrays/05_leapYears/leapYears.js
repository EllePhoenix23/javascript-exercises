/* 
Leap year rules
- Divisible by four, so the remainder after dividing should be zero
- Does not include years divisible by 100
- Does include years divisible by 400
*/

const leapYears = function(year) {
    if (year % 4 === 0 && !(year % 100 === 0 && !(year % 400 === 0))) {
        return true
    } else {
        return false
    }
};


// Do not edit below this line
module.exports = leapYears;
