/**
 * @param {number[]} nums
 * @return {number[]}
 */
const constructTransformedArray = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result[i] = nums[(i + nums[i]) % n];
        } else if (nums[i] < 0) {
            result[i] = nums[((i + nums[i]) % n + n) % n];
        } else {
            result[i] = 0;
        }
    }

    return result;
};

//Constraints:
// 1 <= nums.length <= 100
// -100 <= nums[i] <= 100