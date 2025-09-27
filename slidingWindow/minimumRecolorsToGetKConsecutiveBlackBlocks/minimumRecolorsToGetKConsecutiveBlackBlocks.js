/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
const minimumRecolors = function(blocks, k) {
    let minRecolors = k;

    for (let i = 0; i <= blocks.length - k; i++) {
        let whiteBlocksCounter = 0;

        for (let j = i; j < i + k; j++) {
            if (blocks[j] === 'W') {
                whiteBlocksCounter++;
            }
        }

        if (whiteBlocksCounter < minRecolors) {
            minRecolors = whiteBlocksCounter;
        }
    }

    return minRecolors;
};

//Constraints:
// n == blocks.length
// 1 <= n <= 100
// blocks[i] is either 'W' or 'B'.
// 1 <= k <= n