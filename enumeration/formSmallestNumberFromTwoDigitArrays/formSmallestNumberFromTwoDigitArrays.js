/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minNumber = function(nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    const intersection = setNums1.intersection(setNums2);

    if (intersection.size > 0) {
        return Math.min(...intersection);
    }

    const min1 = Math.min(...nums1);
    const min2 = Math.min(...nums2);

    return +`${Math.min(min1, min2)}${Math.max(min1, min2)}`;
};

//Constraints:
// 1 <= nums1.length, nums2.length <= 9
// 1 <= nums1[i], nums2[i] <= 9
// All digits in each array are unique.