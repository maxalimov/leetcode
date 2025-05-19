/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = function(num) {
    if (num % 3 !== 0) {
        return [];
    }

    const mid = num / 3;

    return [mid - 1, mid, mid + 1];
};

//Constraints:
// 0 <= num <= 1015