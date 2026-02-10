/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
    const result = [];

    for (let i = 0; i < code.length; i++) {
        let currentSum = 0;

        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                currentSum += code[(i + j) % code.length];
            }
        } else if (k < 0) {
            for (let j = 1; j <= Math.abs(k); j++) {
                currentSum += code[(i - j + code.length) % code.length];
            }
        }

        result.push(currentSum);
    }

    return result;
};

//Constraints:
// n == code.length
// 1 <= n <= 100
// 1 <= code[i] <= 100
// -(n - 1) <= k <= n - 1