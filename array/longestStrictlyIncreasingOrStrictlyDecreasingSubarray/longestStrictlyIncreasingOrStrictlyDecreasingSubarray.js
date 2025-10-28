/**
 * @param {number[]} nums
 * @return {number}
 */
const longestMonotonicSubarray = function(nums) {
    let incLen = 1;
    let decLen = 1;
    let totalMax = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            incLen++;
            decLen = 1;
        } else if (nums[i] > nums[i - 1]){
            decLen++;
            incLen = 1;
        } else {
            incLen = 1;
            decLen = 1
        }

        totalMax = Math.max(totalMax, incLen, decLen);
    }

    return totalMax;
};

//Constraints:
// 1 <= nums.length <= 50
// 1 <= nums[i] <= 50