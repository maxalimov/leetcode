class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums.toSorted((a, b) => b - a).slice(0, k);
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums = this.nums.toSorted((a, b) => b - a);

        if (this.nums.length > this.k) {
            this.nums.pop();
        }

        return this.nums[this.nums.length - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//Constraints:
// 0 <= nums.length <= 104
// 1 <= k <= nums.length + 1
// -104 <= nums[i] <= 104
// -104 <= val <= 104
// At most 104 calls will be made to add.