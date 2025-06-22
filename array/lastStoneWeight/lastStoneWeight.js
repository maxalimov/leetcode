/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
    const stonesCopy = stones.slice(0);

    while (stonesCopy.length > 1) {
        const sortedStones = stonesCopy.sort((a, b) => a - b);
        const x = sortedStones.pop();
        const y = sortedStones.pop();

        sortedStones.push(x - y);
    }

    return stonesCopy[0] || 0;
};

//Constraints:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000