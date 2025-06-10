/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function(nums) {
    let counter = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            nums[i] = 1 - nums[i];
            nums[i + 1] = 1 - nums[i + 1];
            nums[i + 2] = 1 - nums[i + 2];
            counter++;
        }
    }

    return nums.every(bit => bit === 1) ? counter : -1;
};

//Constraints:
// 3 <= nums.length <= 105
// 0 <= nums[i] <= 1