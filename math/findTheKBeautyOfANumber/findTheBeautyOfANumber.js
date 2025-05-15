/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = function(num, k) {
    const stringNum = String(num);
    let counter = 0;

    for (let i = 0; i < stringNum.length; i++) {
        const kPart = stringNum.slice(i, i + k);

        if (kPart.length === k && num % Number(kPart) === 0) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= num <= 109
// 1 <= k <= num.length (taking num as a string)