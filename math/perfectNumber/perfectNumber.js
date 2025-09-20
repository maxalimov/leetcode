/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
    if (num <= 1) {
        return false;
    }

    let divisorSum = 1;

    const iteration = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= iteration; i++) {
        if (num % i === 0) {
            divisorSum += i;

            const pair = num / i;

            if (pair !== i) {
                divisorSum += pair;
            }
        }
    }

    return divisorSum === num;
};

//Constraints:
// 1 <= num <= 108