/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = function(nums) {
    let left = 0;
    let i = 0;
    let right = nums.length - 1;

    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    while (i <= right) {
        if (nums[i] === 0) {
            swap(i, left);
            left++;
            i++;
        } else if (nums[i] === 2) {
            swap(i, right);
            right--;
        } else {
            i++;
        }
    }
};

//Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.