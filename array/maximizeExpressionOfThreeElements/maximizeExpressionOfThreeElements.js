/**
 * @param {number[]} nums
 * @return {number}
 */
const maximizeExpressionOfThree = function(nums) {
    const sortedNums = nums.toSorted((a, b) => b - a);

    return sortedNums.at(0) + sortedNums.at(1) - sortedNums.at(-1);
};

//Constraints:
// 3 <= nums.length <= 100
// -100 <= nums[i] <= 100