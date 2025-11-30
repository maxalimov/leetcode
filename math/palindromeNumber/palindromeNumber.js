/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let xCopy = x;
    let reversedX = 0;

    while (xCopy > 0) {
        reversedX = reversedX * 10 + (xCopy % 10);
        xCopy = Math.floor(xCopy / 10);
    }

    return reversedX === x;
};

//Constraints:
// -231 <= x <= 231 - 1