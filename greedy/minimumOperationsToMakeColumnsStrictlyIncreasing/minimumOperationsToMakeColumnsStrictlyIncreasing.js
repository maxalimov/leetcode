/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumOperations = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let totalOperations = 0;

    for (let i = 0; i < cols; i++) {
        let prev = grid[0][i];
        let operations = 0;

        for (let j = 1; j < rows; j++) {
            if (grid[j][i] <= prev) {
                operations += (prev - grid[j][i]) + 1;
                prev = prev + 1;
            } else {
                prev = grid[j][i];
            }
        }

        totalOperations += operations;
    }

    return totalOperations;
};

//Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// 0 <= grid[i][j] < 2500