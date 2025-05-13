/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const getStringSum = (str) => {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }

    return sum;
};

const countSymmetricIntegers = function(low, high) {
    let counter = 0;

    for (let i = low; i <= high; i++) {
        const stringNum = String(i);

        if (stringNum.length % 2 !== 0) {
            continue;
        }

        const firstHalf = stringNum.slice(0, stringNum.length / 2);
        const secondHalf = stringNum.slice(stringNum.length / 2);

        if (getStringSum(firstHalf) === getStringSum(secondHalf)) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= low <= high <= 104