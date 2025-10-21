/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxDigit = (num) => {
    let maxNum = 0;

    while (num > 0) {
        let lastDigit = num % 10;

        if (lastDigit > maxNum) {
            maxNum = lastDigit;
        }

        num = Math.floor(num / 10);
    }

    return maxNum;
}

const maxSum = function(nums) {
    const pairs = {};

    for (let i = 0; i < nums.length; i++) {
        const maxDigit = getMaxDigit(nums[i]);

        if (!pairs[maxDigit]) {
            pairs[maxDigit] = [];
        }

        pairs[maxDigit].push(nums[i]);
    }

    let maxPairSum = -1;

    for (const key in pairs) {
        if (pairs[key].length > 1) {
            const sorted = pairs[key].sort((a, b) => a - b);
            const currentPairSum = sorted.at(-1) + sorted.at(-2);

            if (currentPairSum > maxPairSum) {
                maxPairSum = currentPairSum;
            }
        }
    }

    return maxPairSum;
};

//Constraints:
// 2 <= nums.length <= 100
// 1 <= nums[i] <= 104