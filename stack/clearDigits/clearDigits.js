/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && s[i] >= '0' && s[i] <= '9') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};

//Constraints:
// 1 <= s.length <= 100
// s consists only of lowercase English letters and digits.
// The input is generated such that it is possible to delete all digits.