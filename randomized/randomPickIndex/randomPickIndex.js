class Solution {
    constructor(nums) {
        this.frequency = new Map();
        this.nums = nums;

        for (let i = 0; i < nums.length; i++) {
            if (!this.frequency.has(nums[i])) {
                this.frequency.set(nums[i], []);
            }

            this.frequency.get(nums[i]).push(i);
        }
    }

    pick(target) {
        const targetArr = this.frequency.get(target);
        return targetArr[Math.floor(Math.random() * targetArr.length)];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

//Constraints:
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// target is an integer from nums.
// At most 104 calls will be made to pick.