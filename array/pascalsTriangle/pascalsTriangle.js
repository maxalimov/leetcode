/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        result[i] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i].push(1);
            } else {
                result[i].push(result[i-1][j-1] + result[i-1][j])
            }
        }
    }

    return result;
};

//Constraints:
// 1 <= numRows <= 30