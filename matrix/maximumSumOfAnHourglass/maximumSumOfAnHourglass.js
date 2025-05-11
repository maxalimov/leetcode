/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxSum = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    let maxSum = 0;

    for (let i = 0; i <= row - 3; i++) {
        for (let j = 0; j <= col - 3; j++) {
            let currentSum =
                grid[i][j] + grid[i][j+1] + grid[i][j+2] +
                grid[i+1][j+1] +
                grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];

            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};

//Constraints:
// m == grid.length
// n == grid[i].length
// 3 <= m, n <= 150
// 0 <= grid[i][j] <= 106