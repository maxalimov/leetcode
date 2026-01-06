/**
 * @param {number} n
 * @return {boolean}
 */

const isPalindrome = (number) => {
    let numberCopy = number;
    let reversedNumber = 0;

    while (numberCopy > 0) {
        reversedNumber = (reversedNumber * 10) + numberCopy % 10;
        numberCopy = Math.floor(numberCopy / 10);
    }

    return reversedNumber === number;
}

const convertToBase2 = (number) => {
    let numberCopy = number;
    let convertedNumber = '';

    while (numberCopy > 0) {
        convertedNumber = (numberCopy % 2) + convertedNumber;
        numberCopy = Math.floor(numberCopy / 2);
    }

    return convertedNumber;
}

const isStrictlyPalindromic = function(n) {
    const base2 = convertToBase2(n);
    return isPalindrome(base2);
};

//Constraints:
// 4 <= n <= 105