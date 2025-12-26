/**
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = function(customers) {
    let penalties = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            penalties++;
        }
    }

    let minPenalty = penalties;
    let bestHour = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            penalties--;
        } else {
            penalties++;
        }

        if (penalties < minPenalty) {
            minPenalty = penalties;
            bestHour = i + 1;
        }
    }

    return bestHour;
};