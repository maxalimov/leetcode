/**
 * @param {number[]} nums
 * @return {number}
 */

const minMaxGame = function(nums) {
    let numsCopy = nums.slice();

    while (numsCopy.length > 1) {
        const newNums = new Array(numsCopy.length / 2);

        for (let i = 0; i < newNums.length; i++) {
            if (i % 2 === 0) {
                newNums[i] = Math.min(numsCopy[2 * i], numsCopy[2 * i + 1]);
            } else {
                newNums[i] = Math.max(numsCopy[2 * i], numsCopy[2 * i + 1]);
            }
        }

        numsCopy = newNums;
    }

    return numsCopy[0];
};

//Constraints:
// 1 <= nums.length <= 1024
// 1 <= nums[i] <= 109
// nums.length is a power of 2.