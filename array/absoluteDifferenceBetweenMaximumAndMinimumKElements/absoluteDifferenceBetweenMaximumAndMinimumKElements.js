/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const absDifference = function(nums, k) {
    const sortedNums = nums.toSorted((a, b) => a - b);
    let smallestSum = 0;
    let largestSum = 0;

    for (let i = 0; i < k; i++) {
        smallestSum += sortedNums[i];
        largestSum += sortedNums[sortedNums.length - 1 - i];
    }

    return Math.abs(largestSum - smallestSum);
};

//Constraints:
// 1 <= n == nums.length <= 100
// 1 <= nums[i] <= 100
// 1 <= k <= n