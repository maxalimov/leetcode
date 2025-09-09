/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function(timePoints) {
    const minutes = [];

    for (let i = 0; i < timePoints.length; i++) {
        const [hours, minute] = timePoints[i].split(':')

        minutes.push((+hours) * 60 + +minute);
    }

    const sortedMinutes = minutes.toSorted((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 1; i < sortedMinutes.length; i++) {
        minDiff = Math.min(minDiff, sortedMinutes[i] - sortedMinutes[i - 1]);
    }

    const dayMinutes = 60 * 24;

    minDiff = Math.min(minDiff, dayMinutes - (sortedMinutes.at(-1) - sortedMinutes[0]))

    return minDiff;
};

//Constraints:
// 2 <= timePoints.length <= 2 * 104
// timePoints[i] is in the format "HH:MM"