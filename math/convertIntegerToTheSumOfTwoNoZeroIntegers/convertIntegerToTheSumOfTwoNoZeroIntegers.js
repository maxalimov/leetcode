/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function(n) {
    let a = null;
    let b = n;

    while (b > 0) {
        if (!String(b).includes('0') && b < n && !String(n - b).includes('0')) {
            a = n - b;
            break;
        }

        b--;
    }

    return [a, b];
};

//Constraints:
// 2 <= n <= 104