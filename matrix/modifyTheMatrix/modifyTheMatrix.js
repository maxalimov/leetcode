/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const copyMatrix = (matrix) => {
    return matrix.map(row => row.slice());
};

const modifiedMatrix = function(matrix) {
    const answer = copyMatrix(matrix);
    const m = answer.length;
    const n = answer[0].length;
    const columnMaxElements = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (answer[j][i] > columnMaxElements[i]) {
                columnMaxElements[i] = answer[j][i]
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (answer[i][j] === -1) {
                answer[i][j] = columnMaxElements[j];
            }
        }
    }

    return answer;
};

//Constraints:
// m == matrix.length
// n == matrix[i].length
// 2 <= m, n <= 50
// -1 <= matrix[i][j] <= 100
// The input is generated such that each column contains at least one non-negative integer.