/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }

            i++;
        }
    }
};

//Constraints:
// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9