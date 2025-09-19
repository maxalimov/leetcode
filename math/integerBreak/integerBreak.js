/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
    if (n === 2) {
        return 1;
    }

    if (n === 3) {
        return 2;
    }

    let product = 1;
    let copyN = n;

    while (copyN > 4) {
        product *= 3;
        copyN -= 3;
    }

    product *= copyN;

    return product;
};

//Constraints:
// 2 <= n <= 58