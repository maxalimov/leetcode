/**
 * @param {number} n
 * @return {boolean}
 */
const checkDivisibility = function(n) {
    const stringed = String(n);
    let digitProduct = 1;
    let digitSum = 0;

    for (let i = 0; i < stringed.length; i++) {
        digitProduct *= +stringed[i];
        digitSum += +stringed[i];
    }

    return n % (digitProduct + digitSum) === 0;
};

//Constraints:
// 1 <= n <= 106