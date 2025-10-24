/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
    const frequency = {};

    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
    }

    let majority = nums.length / 3;
    const result = [];

    for (const key in frequency) {
        if (frequency[key] > majority) {
            result.push(+key);
        }
    }

    return result;
};

//Constraints:
// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109