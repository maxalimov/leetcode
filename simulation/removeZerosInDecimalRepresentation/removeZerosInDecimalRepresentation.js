/**
 * @param {number} n
 * @return {number}
 */
const removeZeros = function(n) {
    const string = String(n);
    let result = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '0') {
            result += string[i];
        }
    }

    return Number(result);
};