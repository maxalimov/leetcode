/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfEncryptedInt = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = String(nums[i]);
        let currentMaxNumber = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            if (Number(currentNumber[j]) > currentMaxNumber) {
                currentMaxNumber = Number(currentNumber[j]);
            }
        }

        result.push(String(currentMaxNumber).repeat(currentNumber.length));
    }

    return result.map(number => Number(number)).reduce((acc, num) => acc + num, 0);
};

//Constraints:
// 1 <= nums.length <= 50
// 1 <= nums[i] <= 1000