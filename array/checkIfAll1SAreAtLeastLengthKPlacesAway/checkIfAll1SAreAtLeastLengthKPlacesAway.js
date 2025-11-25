/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function(nums, k) {
    let prev = null;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 && prev === null) {
            prev = i;
        } else if (nums[i] === 1 && prev !== null) {
            if (i - prev - 1 < k) {
                return false;
            }

            prev = i;
        }
    }

    return true;
};

//Constraints:
// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1