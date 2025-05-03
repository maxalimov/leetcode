/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
const finalPositionOfSnake = function(n, commands) {
    const matrix = [];
    let column = 0;
    let row = 0;

    let matrixNumbers = 0;
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(matrixNumbers);
            matrixNumbers++;
        }
    }

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'RIGHT') {
            column++;
        } else if (commands[i] === 'LEFT') {
            column--;
        } else if (commands[i] === 'UP') {
            row--;
        } else if (commands[i] === 'DOWN') {
            row++;
        }
    }

    return matrix[row][column];
};

//Constraints:
// 2 <= n <= 10
// 1 <= commands.length <= 100
// commands consists only of "UP", "RIGHT", "DOWN", and "LEFT".
// The input is generated such the snake will not move outside of the boundaries.