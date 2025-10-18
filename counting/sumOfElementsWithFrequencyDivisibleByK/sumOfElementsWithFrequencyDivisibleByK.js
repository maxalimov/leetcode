/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumDivisibleByK = function(nums, k) {
    const freq = {};

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    let sum = 0;

    for (const key in freq) {
        if (freq[key] % k === 0) {
            sum += Number(key) * freq[key];
        }
    }

    return sum;
};

//Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
// 1 <= k <= 100