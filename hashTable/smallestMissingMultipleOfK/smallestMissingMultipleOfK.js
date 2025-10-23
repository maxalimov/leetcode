/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingMultiple = function(nums, k) {
    const set = new Set(nums);
    let smallestMissing = 1;

    while (true) {
        if (smallestMissing % k === 0 && !set.has(smallestMissing)) {
            return smallestMissing;
        }

        smallestMissing++;
    }
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// 1 <= k <= 100