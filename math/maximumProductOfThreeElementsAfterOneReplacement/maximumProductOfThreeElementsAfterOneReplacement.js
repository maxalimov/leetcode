/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    const sortedNums = nums.toSorted((a, b) => Math.abs(a) - Math.abs(b));
    let left = sortedNums.at(-3);
    let mid = sortedNums.at(-2);
    let right = sortedNums.at(-1);

    left = (mid * right > 0) ? 100000 : -100000;

    return left * mid * right;
};

//Constraints:
// 3 <= nums.length <= 105
// -105 <= nums[i] <= 105