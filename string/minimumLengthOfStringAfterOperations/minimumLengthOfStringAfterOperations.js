/**
 * @param {string} s
 * @return {number}
 */
const minimumLength = function(s) {
    const frequency = {};

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    let deleteCount = 0;

    for (const key in frequency) {
        if (frequency[key] % 2 === 0) {
            deleteCount += frequency[key] - 2;
        } else {
            deleteCount += frequency[key] - 1;
        }
    }

    return s.length - deleteCount;
};

//Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of lowercase English letters.