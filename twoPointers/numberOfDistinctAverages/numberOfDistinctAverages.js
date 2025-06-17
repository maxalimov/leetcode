/**
 * @param {number[]} nums
 * @return {number}
 */
const distinctAverages = function(nums) {
    const sortedNums = nums.toSorted((a, b) => a - b);
    let left = 0;
    let right = sortedNums.length - 1;
    const set = new Set();

    while (left < right) {
        let minNumber = sortedNums[left];
        let maxNumber = sortedNums[right];

        set.add((minNumber + maxNumber) / 2);

        left++;
        right--;
    }

    return set.size;
};

//Constraints:
// 2 <= nums.length <= 100
// nums.length is even.
// 0 <= nums[i] <= 100