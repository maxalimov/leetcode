/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
    let firstMax = -1;
    let secondMax = -1;
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            secondMax = firstMax;
            firstMax = nums[i];
            index = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }

    return secondMax * 2 > firstMax ? -1 : index;
};

//Constraints:
// 2 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.