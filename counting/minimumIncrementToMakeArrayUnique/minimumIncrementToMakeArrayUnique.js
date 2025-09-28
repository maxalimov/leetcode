/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function(nums) {
    const sortedNums = nums.toSorted((a, b) => a - b);
    let counter = 0;
    let prev = sortedNums[0];

    for (let i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] <= prev) {
            counter += (prev + 1 - sortedNums[i]);
            prev = prev + 1;
        } else {
            prev = sortedNums[i];
        }
    }

    return counter;
};

//Constraints:
// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105