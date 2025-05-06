/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function(nums, maximumBit) {
    let result = [];
    let xor = 0;

    for (let num of nums) {
        xor ^= num;
    }

    for (let i = 0; i < nums.length; i++) {
        let k = (Math.pow(2, maximumBit) - 1) ^ xor;
        result.push(k);
        xor ^= nums[nums.length - 1 - i];
    }

    return result;
};

//Constraints:
// nums.length == n
// 1 <= n <= 105
// 1 <= maximumBit <= 20
// 0 <= nums[i] < 2maximumBit
// nums​​​ is sorted in ascending order.