/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function(nums) {
    let maxDiff = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                maxDiff = Math.max(maxDiff, nums[j] - nums[i]);
            }
        }
    }

    return maxDiff;
};

//Constraints:
// n == nums.length
// 2 <= n <= 1000
// 1 <= nums[i] <= 109