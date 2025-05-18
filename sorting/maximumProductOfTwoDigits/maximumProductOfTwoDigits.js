/**
 * @param {number} n
 * @return {number}
 */
const maxProduct = function(n) {
    const sortedN = String(n).split('').sort((a, b) => a - b);

    return sortedN.at(-1) * sortedN.at(-2);
};

//Constraints:
// 10 <= n <= 109