/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const checkPrimeFrequency = function(nums) {
    const frequency = {};

    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
    }

    for (const key in frequency) {
        if (isPrime(frequency[key])) {
            return true;
        }
    }

    return false;
};

//Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100