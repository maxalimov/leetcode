/**
 * @param {string} s
 * @return {number}
 */
const maximumLengthSubstring = function(s) {
    const frequency = new Map();
    let left = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (frequency.has(s[i])) {
            frequency.set(s[i], frequency.get(s[i]) + 1);
        } else {
            frequency.set(s[i], 1);
        }

        if (frequency.get(s[i]) > 2) {
            while (frequency.get(s[i]) > 2) {
                frequency.set(s[left], frequency.get(s[left]) - 1);
                left++;
            }
        }

        maxLength = Math.max(maxLength, i - left + 1);
    }

    return maxLength;
};

//Constraints:
// 2 <= s.length <= 100
// s consists only of lowercase English letters.