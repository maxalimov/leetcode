/**
 * @param {number[]} nums
 * @return {number}
 */
const firstUniqueEven = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            return nums[i];
        }
    }

    return -1;
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100