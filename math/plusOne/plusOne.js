/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let integer = 0n;

    for (let i = 0; i < digits.length; i++) {
        integer = integer * 10n + BigInt(digits[i]);
    }

    let plusOne = integer + 1n;

    let stringPlusOne = String(plusOne);
    let result = [];

    for (let i = 0; i < stringPlusOne.length; i++) {
        result.push(Number(stringPlusOne[i]));
    }

    return result;
};

//Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.