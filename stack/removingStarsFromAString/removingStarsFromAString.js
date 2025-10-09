/**
 * @param {string} s
 * @return {string}
 */
const removeStars = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && s[i] === '*') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};

//Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters and stars *.
// The operation above can be performed on s.