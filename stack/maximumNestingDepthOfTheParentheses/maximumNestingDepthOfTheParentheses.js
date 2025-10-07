/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function(s) {
    let maxDepth = 0;
    let currentDepth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            currentDepth++;
            maxDepth = Math.max(maxDepth, currentDepth);
        } else if (s[i] === ')') {
            currentDepth--;
        }
    }

    return maxDepth;
};

//Constraints:
// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.