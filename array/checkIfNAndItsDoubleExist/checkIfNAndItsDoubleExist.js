/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }

    return false;
};

//Constraints:
// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103