/**
 * @param {number[][]} tasks
 * @return {number}
 */
const earliestTime = function(tasks) {
    let earliestTime = Infinity;

    for (let i = 0; i < tasks.length; i++) {
        const [startTime, finishTime] = tasks[i];

        if ((startTime + finishTime) < earliestTime) {
            earliestTime = startTime + finishTime;
        }
    }

    return earliestTime;
};

//Constraints:
// 1 <= tasks.length <= 100
// tasks[i] = [si, ti]
// 1 <= si, ti <= 100
