/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    const x = Math.log(n) / Math.log(4);
    return Number.isInteger(x);
};

//Constraints:
// -231 <= n <= 231 - 1