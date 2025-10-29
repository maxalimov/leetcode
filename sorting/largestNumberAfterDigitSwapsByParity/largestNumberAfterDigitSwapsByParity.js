/**
 * @param {number} num
 * @return {number}
 */
const largestInteger = function(num) {
    const digits = String(num).split('').map(Number);

    const evenNumbers = digits.filter(d => d % 2 === 0).sort((a, b) => b - a);
    const oddNumbers = digits.filter(d => d % 2 !== 0).sort((a, b) => b - a);

    let i = 0;
    let j = 0;

    const result = digits.map(d => {
        if (d % 2 === 0) {
            return evenNumbers[i++];
        } else {
            return oddNumbers[j++];
        }
    })

    return Number(result.join(''));
};

//Constraints:
// 1 <= num <= 109