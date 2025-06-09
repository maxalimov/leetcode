/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = function(num) {
    let goodInteger = 0;

    for (let i = 0; i < num.length - 2; i++) {
        let first = num[i];
        let second = num[i + 1];
        let third = num[i + 2];
        let sum = first + second + third;

        if (first === second && second === third) {
            if (goodInteger === 0) {
                goodInteger = sum;
            }

            if (+sum > goodInteger) {
                goodInteger = sum;
            }
        }
    }

    return goodInteger === 0 ? '' : String(goodInteger);
};

//Constraints:
// 3 <= num.length <= 1000
// num only consists of digits.