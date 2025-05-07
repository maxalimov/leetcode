/**
 * @param {number} x
 * @return {number}
 */
const sumOfTheDigitsOfHarshadNumber = function(x) {
    let digitSum = 0;
    let temp = x;

    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    return x % digitSum === 0 ? digitSum : -1;
};

//Constraints:
// 1 <= x <= 100