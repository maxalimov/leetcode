/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findMissingElements = function(nums) {
    const set = new Set(nums);
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let missingElements = [];

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            missingElements.push(i);
        }
    }

    return missingElements;
};

//Constraints:
// 2 <= nums.length <= 100
// 1 <= nums[i] <= 100