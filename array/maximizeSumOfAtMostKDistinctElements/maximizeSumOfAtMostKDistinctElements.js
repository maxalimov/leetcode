/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxKDistinct = function(nums, k) {
    const uniqueNumbers = [...new Set(nums)].sort((a, b) => b - a);
    return uniqueNumbers.slice(0, k);
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 109
// 1 <= k <= nums.length