/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
    const prefixSum = new Array(nums.length).fill(0);
    prefixSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];
    }

    const min = Math.min(...prefixSum);

    if (min >= 1) {
        return 1;
    }

    return -min + 1;
};

//Constraints:
// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100