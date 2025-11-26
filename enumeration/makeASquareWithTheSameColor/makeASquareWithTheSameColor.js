/**
 * @param {character[][]} grid
 * @return {boolean}
 */

const squareChecker = (cells) => {
    const blackColors = cells.filter(cell => cell === 'B');
    const whiteColors = cells.filter(cell => cell === 'W');

    return blackColors.length >= 3 || whiteColors.length >= 3;
};

const canMakeSquare = function(grid) {
    const topLeft = [grid[0][0], grid[0][1], grid[1][0], grid[1][1]];
    const topRight = [grid[0][1], grid[0][2], grid[1][1], grid[1][2]];
    const bottomLeft = [grid[1][0], grid[1][1], grid[2][0], grid[2][1]];
    const bottomRight = [grid[1][1], grid[1][2], grid[2][1], grid[2][2]];

    return (
        squareChecker(topLeft) ||
        squareChecker(topRight) ||
        squareChecker(bottomLeft) ||
        squareChecker(bottomRight)
    )

    if (squareChecker(topLeft)) {
        return true;
    } else if (squareChecker(topRight)) {
        return true;
    } else if (squareChecker(bottomLeft)) {
        return true;
    } else if (squareChecker(bottomRight)) {
        return true;
    } else {
        return false;
    }
};

//Constraints:
// grid.length == 3
// grid[i].length == 3
// grid[i][j] is either 'W' or 'B'.