/**
 * @param {number[][]} matrix
 * @return {number}
 */
const maxMatrixSum = function(matrix) {
    const flatMatrix = matrix.flat(1);
    const matrixAbsoluteSum = flatMatrix.reduce((acc, num) => acc + Math.abs(num), 0);
    const negativeNumbersCounter = flatMatrix.filter(num => num < 0).length;

    if (negativeNumbersCounter % 2 === 0) {
        return matrixAbsoluteSum;
    }

    const minNumber = Math.min(...flatMatrix.map(num => Math.abs(num)));

    return matrixAbsoluteSum - 2 * minNumber;
};

//Constraints:
// n == matrix.length == matrix[i].length
// 2 <= n <= 250
// -105 <= matrix[i][j] <= 105