/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = function(number, digit) {
    const parts = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            parts.push(number.slice(0, i) + number.slice(i + 1));
        }
    }

    let maxNum = BigInt(parts[0]);

    for (let i = 1; i < parts.length; i++) {
        const currentNum = BigInt(parts[i]);
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
    }

    return String(maxNum);
};

//Constraints:
// 2 <= number.length <= 100
// number consists of digits from '1' to '9'.
// digit is a digit from '1' to '9'.
// digit occurs at least once in number.