/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
    if (num === 0) return "0";

    num >>>= 0;

    const digits = "0123456789abcdef";
    let result = "";

    while (num > 0) {
        let remainder = num % 16;
        result = digits[remainder] + result;
        num = Math.floor(num / 16);
    }

    return result;
};

//Constraints:
// -231 <= num <= 231 - 1