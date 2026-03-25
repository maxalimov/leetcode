/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
const toggleLightBulbs = function(bulbs) {
    const map = new Map();

    for (let i = 0; i < bulbs.length; i++) {
        map.set(bulbs[i], (map.get(bulbs[i]) || 0) + 1);
    }

    const result = [];

    for (const [key, value] of map) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    return result.toSorted((a, b) => a - b);
};

//Constraints:
// 1 <= bulbs.length <= 100
// 1 <= bulbs[i] <= 100