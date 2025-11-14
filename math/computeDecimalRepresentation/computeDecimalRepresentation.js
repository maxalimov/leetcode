/**
 * @param {number} n
 * @return {number[]}
 */
const decimalRepresentation = function(n) {
    const str = n.toString();
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const digit = Number(str[i]);
        if (digit !== 0) {
            const power = str.length - i - 1;
            result.push(digit * Math.pow(10, power));
        }
    }
    return result;
};

//Constraints:
// 1 <= n <= 109