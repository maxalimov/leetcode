/**
 * @param {number[][]} grid
 */
class NeighborSum {
    constructor(grid) {
        this.grid = grid;
    }

    /**
     * @param {number} value
     * @return {{row: number, col: number}}
     */
    getCoordinates(value) {
        const coordinates = {row: null, col: null};

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] === value) {
                    coordinates.row = i;
                    coordinates.col = j;
                }
            }
        }

        return coordinates;
    }

    /**
     * @param {number} value
     * @return {number}
     */
    adjacentSum(value) {
        let adjacentSum = 0;
        const coordinates = this.getCoordinates(value);

        if (this.grid[coordinates.row - 1]?.[coordinates.col]) {
            adjacentSum += this.grid[coordinates.row - 1][coordinates.col];
        }

        if (this.grid[coordinates.row]?.[coordinates.col - 1]) {
            adjacentSum += this.grid[coordinates.row][coordinates.col - 1];
        }

        if (this.grid[coordinates.row]?.[coordinates.col + 1]) {
            adjacentSum += this.grid[coordinates.row][coordinates.col + 1]
        }

        if (this.grid[coordinates.row + 1]?.[coordinates.col]) {
            adjacentSum += this.grid[coordinates.row + 1][coordinates.col];
        }

        return adjacentSum;
    }

    /**
     * @param {number} value
     * @return {number}
     */
    diagonalSum(value) {
        let diagonalSum = 0;
        let coordinates = this.getCoordinates(value);

        if (this.grid[coordinates.row - 1]?.[coordinates.col - 1]) {
            diagonalSum += this.grid[coordinates.row - 1][coordinates.col - 1];
        }

        if (this.grid[coordinates.row - 1]?.[coordinates.col + 1]) {
            diagonalSum += this.grid[coordinates.row - 1][coordinates.col + 1];
        }

        if (this.grid[coordinates.row + 1]?.[coordinates.col - 1]) {
            diagonalSum += this.grid[coordinates.row + 1][coordinates.col - 1];
        }

        if (this.grid[coordinates.row + 1]?.[coordinates.col + 1]) {
            diagonalSum += this.grid[coordinates.row + 1][coordinates.col + 1];
        }

        return diagonalSum;
    }
}


//Constraints:
// 3 <= n == grid.length == grid[0].length <= 10
// 0 <= grid[i][j] <= n2 - 1
// All grid[i][j] are distinct.
// value in adjacentSum and diagonalSum will be in the range [0, n2 - 1].
// At most 2 * n2 calls will be made to adjacentSum and diagonalSum.
