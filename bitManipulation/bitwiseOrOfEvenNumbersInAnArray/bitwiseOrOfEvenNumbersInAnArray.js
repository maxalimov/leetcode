/**
 * @param {number[]} nums
 * @return {number}
 */
const evenNumberBitwiseORs = function(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & 1) === 0) {
            result |= nums[i];
        }
    }

    return result;
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100