/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = function(nums) {
    let numsCopy = [...nums];
    let iteration = numsCopy.length - 1;

    while (iteration >= 1) {
        for (let i = 0; i < iteration; i++) {
            numsCopy[i] = (numsCopy[i] + numsCopy[i + 1]) % 10;
        }
        iteration--;
    }

    return numsCopy[0];
};

//Constraints:
// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 9