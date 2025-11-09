/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function(nums) {
    let isMonotonicIncreasing = true;
    let isMonotonicDecreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isMonotonicIncreasing = false;
        }

        if (nums[i] < nums[i + 1]) {
            isMonotonicDecreasing = false;
        }
    }

    return (isMonotonicIncreasing || isMonotonicDecreasing) ? true : false;
};

//Constraints:
// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105