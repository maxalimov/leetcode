/**
 * @param {number[]} nums
 * @return {number}
 */
const returnToBoundaryCount = function(nums) {
    let counter = 0;
    let currentPosition = 0;

    for (let i = 0; i < nums.length; i++) {
        currentPosition += nums[i];

        if (currentPosition === 0) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= nums.length <= 100
// -10 <= nums[i] <= 10
// nums[i] != 0