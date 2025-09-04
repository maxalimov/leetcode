/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
const recoverOrder = function(order, friends) {
    const friendsSet = new Set(friends)
    const finishOrder = [];

    for (let i = 0; i < order.length; i++) {
        if (friendsSet.has(order[i])) {
            finishOrder.push(order[i]);
        }
    }

    return finishOrder;
};

//Constraints:
// 1 <= n == order.length <= 100
// order contains every integer from 1 to n exactly once
// 1 <= friends.length <= min(8, n)
// 1 <= friends[i] <= n
// friends is strictly increasing