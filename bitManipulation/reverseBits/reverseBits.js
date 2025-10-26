/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = function(n) {
    const binary = n.toString(2).padStart(32, '0');
    const reversedBinary = binary.split('').reverse().join('');
    return parseInt(reversedBinary, 2);
};

//Constraints:
// 0 <= n <= 231 - 2
// n is even.