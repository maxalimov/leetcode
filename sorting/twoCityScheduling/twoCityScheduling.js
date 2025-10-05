/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
    const sortedCosts = costs.toSorted((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
    let minSum = 0;

    for (let i = 0; i < sortedCosts.length; i++) {
        const half = sortedCosts.length / 2;

        if (i < half) {
            minSum += sortedCosts[i][1];
        } else {
            minSum += sortedCosts[i][0];
        }
    }

    return minSum;
};

//Constraints:
// 2 * n == costs.length
// 2 <= costs.length <= 100
// costs.length is even.
// 1 <= aCosti, bCosti <= 1000