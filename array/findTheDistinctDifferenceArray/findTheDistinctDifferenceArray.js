/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distinctDifferenceArray = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const prefixSet = new Set();
        const suffixSet = new Set();

        for (let j = 0; j <= i; j++) {
            prefixSet.add(nums[j]);
        }

        for (let k = i + 1; k < nums.length; k++) {
            suffixSet.add(nums[k]);
        }

        result.push(prefixSet.size - suffixSet.size);
    }

    return result;
};

//Constraints:
// 1 <= n == nums.length <= 50
// 1 <= nums[i] <= 50