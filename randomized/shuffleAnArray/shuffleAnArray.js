class Solution {
    constructor(nums) {
        this.originalArray = [...nums];
        this.nums = nums;
    }

    reset() {
        return this.originalArray;
    }

    //Fisher–Yates shuffle
    shuffle() {
        const arr = this.nums;

        for (let i = arr.length - 1; i > 0; i --) {
            const j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }
}


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

//Constraints:
// 1 <= nums.length <= 50
// -106 <= nums[i] <= 106
// All the elements of nums are unique.
// At most 104 calls in total will be made to reset and shuffle.