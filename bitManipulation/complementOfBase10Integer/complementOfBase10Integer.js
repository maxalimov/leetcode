/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = function(n) {
    return parseInt(n.toString(2).split('').map(bit => bit === '1' ? '0' : '1').join(''), 2);
};

//Constraints:
// 0 <= n < 109