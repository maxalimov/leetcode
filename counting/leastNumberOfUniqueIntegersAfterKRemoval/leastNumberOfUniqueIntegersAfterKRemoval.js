/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function(arr, k) {
    const frequency = new Map();
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (frequency.has(arr[i])) {
            frequency.set(arr[i], frequency.get(arr[i]) + 1);
        } else {
            frequency.set(arr[i], 1);
        }
    }

    const sortedFrequency = [...frequency.values()].sort((a, b) => a - b);
    let removals = k;
    let uniqueIntegers = sortedFrequency.length;

    for (const freq of sortedFrequency) {
        if (removals >= freq) {
            removals -= freq;
            uniqueIntegers--;
        }
    }

    return uniqueIntegers;
};

//Constraints:
// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^9
// 0 <= k <= arr.length