/**
 * @param {number} n
 * @return {number}
 */
const mirrorDistance = function(n) {
    let nCopy = n;
    let reversed = 0;

    while (nCopy > 0) {
        reversed = reversed * 10 + Math.floor(nCopy % 10);
        nCopy = Math.floor(nCopy / 10);
    }

    return Math.abs(n - reversed);
};

//Constraints:
// 1 <= n <= 10^9