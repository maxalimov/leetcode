/**
 * @param {number[]} nums
 * @return {number[]}
 */

//TODO: Improve from o(n^2) to o(n)
const nextGreaterElements = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((i + 1 + j) % nums.length === i) {
                result.push(-1);
                break;
            }

            if (nums[(i + 1 + j) % nums.length] > nums[i]) {
                result.push(nums[(i + 1 + j) % nums.length]);
                break;
            }
        }
    }

    return result;
};

//Constraints:
// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109