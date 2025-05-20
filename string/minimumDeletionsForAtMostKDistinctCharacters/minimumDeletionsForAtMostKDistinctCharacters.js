/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const minDeletion = function(s, k) {
    const frequency = {};

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    if (k >= Object.keys(frequency).length) {
        return 0;
    }

    const sortedArr = Object.entries(frequency).sort((a, b) => a[1] - b[1]);
    const sortedObj = Object.fromEntries(sortedArr);
    let midDeletions = 0;

    for (const key in sortedObj) {
        if (Object.keys(sortedObj).length !== k) {
            midDeletions += sortedObj[key];
            delete sortedObj[key];
        }
    }

    return midDeletions;
};

//Constraints:
// 1 <= s.length <= 16
// 1 <= k <= 16
// s consists only of lowercase English letters.