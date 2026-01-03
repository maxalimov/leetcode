/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function(n, k) {
    const friends = [];

    for (let i = 1; i <= n; i++) {
        friends.push(i);
    }

    let i = 0;

    while (friends.length != 1) {
        i = (i + k - 1) % friends.length;

        friends.splice(i, 1);
    }

    return friends[0];
};

//Constraints:
// 1 <= k <= n <= 500