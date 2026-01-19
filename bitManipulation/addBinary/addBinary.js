/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let result = '';
    let carry = 0;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) {
            sum += +a[i--];
        }

        if (j >= 0) {
            sum += +b[j--];
        }

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};

//Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.