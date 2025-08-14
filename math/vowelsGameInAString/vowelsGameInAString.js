/**
 * @param {string} s
 * @return {boolean}
 */
const doesAliceWin = function(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            return true
        }
    }

    return false;
};

//Constraints:
// 1 <= s.length <= 105
// s consists only of lowercase English letters.