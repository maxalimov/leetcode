/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function(tickets, k) {
    const ticketsCopy = [...tickets];
    let counter = 0;

    let i = 0;

    while (ticketsCopy[k] > 0) {
        if (ticketsCopy[i] > 0) {
            ticketsCopy[i] = ticketsCopy[i] - 1;
            counter++;
        }

        i = (i + 1) % ticketsCopy.length;
    }

    return counter;
};

//Constraints:
// n == tickets.length
// 1 <= n <= 100
// 1 <= tickets[i] <= 100
// 0 <= k < n