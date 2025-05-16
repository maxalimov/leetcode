/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(nums, queries) {
    let evenSum = nums.reduce((acc, num) => acc + (num % 2 === 0 ? num : 0), 0);
    const result = [];

    for (const [value, index] of queries) {
        if (nums[index] % 2 === 0) {
            evenSum -= nums[index];
        }

        nums[index] += value;

        if (nums[index] % 2 === 0) {
            evenSum += nums[index];
        }

        result.push(evenSum);
    }

    return result;
};

//Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// 1 <= queries.length <= 104
// -104 <= vali <= 104
// 0 <= indexi < nums.length