/**
 * @param {number[]} nums
 * @return {number}
 */
const countPartitions = function(nums) {
    const sum = nums.reduce((acc, num) => acc + num);

    return sum % 2 === 0 ? nums.length - 1 : 0;
};

//Constraints:
// 2 <= n == nums.length <= 100
// 1 <= nums[i] <= 100