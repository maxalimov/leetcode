/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function(s) {
    let result = '';
    let depth = 0;

    for (let char of s) {
        if (char === '(') {
            if (depth > 0) {
                result += char;
            }
            depth++;
        } else {
            depth--;
            if (depth > 0) {
                result += char;
            }
        }
    }

    return result;
};

//Constraints:
// 1 <= s.length <= 105
// s[i] is either '(' or ')'.
// s is a valid parentheses string.