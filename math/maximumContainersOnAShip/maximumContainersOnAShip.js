/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
const maxContainers = function(n, w, maxWeight) {
    const cells = n * n;
    const allowedByWeight = Math.floor(maxWeight / w);

    return Math.min(cells, allowedByWeight);
};

//Constraints:
// 1 <= n <= 1000
// 1 <= w <= 1000
// 1 <= maxWeight <= 109