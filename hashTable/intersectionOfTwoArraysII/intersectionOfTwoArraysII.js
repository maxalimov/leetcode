/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const frequency = new Map();
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        frequency.set(nums1[i], (frequency.get(nums1[i]) || 0) + 1);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (frequency.get(nums2[i]) > 0) {
            frequency.set(nums2[i], frequency.get(nums2[i]) - 1);
            result.push(nums2[i]);
        }
    }

    return result;
};

//Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000