const isArraySorted = (arr) => {
    const sortedArr = arr.toSorted((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortedArr[i]) {
            return false;
        }
    }

    return true;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

const minimumPairRemoval = function(nums) {
    let operations = 0;

    while (!isArraySorted(nums)) {
        let minPair = nums[0] + nums[1];
        let pairIndex = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            const pairSum = nums[i] + nums[i + 1];
            if (pairSum < minPair) {
                minPair = pairSum;
                pairIndex = i;
            }
        }

        const minPairSum = nums[pairIndex] + nums[pairIndex + 1];
        nums.splice(pairIndex, 2, minPairSum);
        operations++;
    }

    return operations;
};

//Constraints:
// 1 <= nums.length <= 50
// -1000 <= nums[i] <= 1000