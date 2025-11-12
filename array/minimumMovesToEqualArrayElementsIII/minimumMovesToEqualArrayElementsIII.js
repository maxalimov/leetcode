/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
    const max = Math.max(...nums);
    let movesCounter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== max && nums[i] < max) {
            movesCounter += (max - nums[i]);
        }
    }

    return movesCounter;
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100