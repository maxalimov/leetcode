/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let substring = '';
    let repeatCounter = 0;

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        substring += s[i];

        if (s.length % substring.length === 0) {
            if (substring.repeat(s.length / substring.length) === s) {
                return true;
            }
        }
    }

    return false;
};

//Constraints:
// 1 <= s.length <= 104
// s consists of lowercase English letters.