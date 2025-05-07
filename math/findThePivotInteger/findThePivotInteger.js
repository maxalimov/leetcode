/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = function(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let leftSum = 0;

    for (let i = 1; i <= n; i++) {
        if (leftSum === sum - leftSum - i) {
            return i;
        }

        leftSum += i;
    }

    return -1;
};

//Constraints:
// 1 <= n <= 1000