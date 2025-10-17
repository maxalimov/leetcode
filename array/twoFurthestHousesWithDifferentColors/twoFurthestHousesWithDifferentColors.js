/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function(colors) {
    let maxDistance = 1;

    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== colors[0]) {
            maxDistance = Math.max(maxDistance, Math.abs(i - 0));
        }

        if (colors[i] !== colors[colors.length - 1 - i]) {
            maxDistance = Math.max(maxDistance, Math.abs(i, (colors.length - 1)));
        }
    }

    return maxDistance;
};

//Constraints:
// n == colors.length
// 2 <= n <= 100
// 0 <= colors[i] <= 100
// Test data are generated such that at least two houses have different colors.