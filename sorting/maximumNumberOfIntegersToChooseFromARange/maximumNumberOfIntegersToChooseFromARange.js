/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function(banned, n, maxSum) {
    const set = new Set(banned);
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (!set.has(i) && sum + i <= maxSum) {
            sum += i;
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= banned.length <= 104
// 1 <= banned[i], n <= 104
// 1 <= maxSum <= 109