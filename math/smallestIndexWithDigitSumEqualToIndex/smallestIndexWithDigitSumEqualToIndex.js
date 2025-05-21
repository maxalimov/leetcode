/**
 * @param {number[]} nums
 * @return {number}
 */
const digitSum = (n) => {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

const smallestIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === digitSum(nums[i])) {
            return i;
        }
    }

    return -1;
};

//Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000