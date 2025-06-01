/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(bit => bit === '1' ? '0' : '1').join(''), 2);
};

//Constraints:
// 1 <= num < 231