/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function(number) {
    let cleanedNumber = '';
    let result = '';

    for (let i = 0; i < number.length; i++) {
        if (number[i] !== ' ' && number[i] !== '-') {
            cleanedNumber += number[i];
        }
    }

    while(cleanedNumber.length > 4) {
        result += cleanedNumber.slice(0, 3) + '-';
        cleanedNumber = cleanedNumber.slice(3);
    }

    if (cleanedNumber.length === 4) {
        result += cleanedNumber.slice(0, 2) + '-' + cleanedNumber.slice(2);
        cleanedNumber = cleanedNumber.slice(2);
    } else {
        result += cleanedNumber;
    }

    return result;
};

//Constraints:
// 2 <= number.length <= 100
// number consists of digits and the characters '-' and ' '.
// There are at least two digits in number.