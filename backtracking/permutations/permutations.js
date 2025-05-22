/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    if (nums.length <= 1) {
        return [nums];
    }

    const permutations = [];

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        const subPerms = permute(remaining);

        for (const perm of subPerms) {
            permutations.push([currentNum, ...perm]);
        }
    }

    return permutations;
};

//Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.