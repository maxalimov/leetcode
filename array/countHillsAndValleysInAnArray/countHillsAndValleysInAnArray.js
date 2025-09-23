/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = function(nums) {
    const compressed = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            compressed.push(nums[i]);
        }
    }

    compressed.push(nums[nums.length - 1]);

    let counter = 0;

    for (let i = 1; i < compressed.length - 1; i++) {
        let prev = compressed[i - 1];
        let curr = compressed[i];
        let next = compressed[i + 1];

        if (prev < curr && next < curr) {
            counter++;
        } else if (prev > curr && next > curr) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 3 <= nums.length <= 100
// 1 <= nums[i] <= 100