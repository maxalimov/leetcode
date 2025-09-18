/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function(current, correct) {
    const [currentHours, currentMinutes] = current.split(':');
    const [correctHours, correctMinutes] = correct.split(':');

    const currentConvertedToMinutes = (60 * +currentHours) + +currentMinutes;
    const correctConvertedToMinutes = (60 * +correctHours) + +correctMinutes;

    const steps = [60, 15, 5, 1];
    let diff = Math.abs(currentConvertedToMinutes -correctConvertedToMinutes);
    let minOperations = 0;

    for (const step of steps) {
        const count = Math.floor(diff / step);
        minOperations += count;
        diff -= step * count;
    }

    return minOperations;
};

//Constraints:
// current and correct are in the format "HH:MM"
// current <= correct