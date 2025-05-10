/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = function(grid) {

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === j || j === grid[i].length - i - 1) {
                if (grid[i][j] === 0) {
                    return false;
                }
            } else {
                if (grid[i][j] !== 0) {
                    return false;
                }
            }
        }
    }

    return true;
};

//Constraints:
// n == grid.length == grid[i].length
// 3 <= n <= 100
// 0 <= grid[i][j] <= 105