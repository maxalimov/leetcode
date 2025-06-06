/**
 * @param {number[][]} mat
 * @return {number}
 */

const numSpecial = function(mat) {
    let counter = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                let isSpecial = true;

                for (let col = 0; col < mat[i].length; col++) {
                    if (mat[i][col] === 1 && col !== j) {
                        isSpecial = false;
                        break;
                    }
                }

                for (let row = 0; row < mat.length; row++) {
                    if (mat[row][j] === 1 && row !== i) {
                        isSpecial = false;
                        break;
                    }
                }

                if (isSpecial) {
                    counter++;
                }
            }
        }
    }

    return counter;
};


//Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] is either 0 or 1.