/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function(n) {
    if (n < 0 || n === 0) {
        return false;
    }

    let primeFactors = [2, 3, 5];

    for (const pf of primeFactors) {
        while (n % pf === 0) {
            n = n / pf;
        }
    }

    return n === 1;
};

//Constraints:
// -231 <= n <= 231 - 1
