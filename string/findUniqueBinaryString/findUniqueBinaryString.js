/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = function(nums) {
    let result = '';

    for (let i = 0; i < nums.length; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }

    return result;
};

//Constraints:
//
// n == nums.length
// 1 <= n <= 16
// nums[i].length == n
// nums[i] is either '0' or '1'.
// All the strings of nums are unique.