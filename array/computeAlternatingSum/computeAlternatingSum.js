/**
 * @param {number[]} nums
 * @return {number}
 */
const alternatingSum = function(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i];
        } else {
            sum -= nums[i];
        }
    }

    return sum;
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100