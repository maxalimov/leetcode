/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function(logs) {
    let counter = 0;

    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../' && counter > 0) {
            counter--;
        } else if (logs[i] !== './' && logs[i] !== '../') {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= logs.length <= 103
// 2 <= logs[i].length <= 10
// logs[i] contains lowercase English letters, digits, '.', and '/'.
// logs[i] follows the format described in the statement.
// Folder names consist of lowercase English letters and digits.