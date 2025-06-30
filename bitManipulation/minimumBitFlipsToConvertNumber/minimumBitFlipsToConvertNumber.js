const minBitFlips = function(start, goal) {
    let binStart = start.toString(2);
    let binGoal = goal.toString(2);
    const maxLength = Math.max(binStart.length, binGoal.length)

    binStart = binStart.padStart(maxLength, '0');
    binGoal = binGoal.padStart(maxLength, '0');

    let counter = 0;

    for (let i = 0; i < maxLength; i++) {
        if (binStart[i] !== binGoal[i]) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 0 <= start, goal <= 109