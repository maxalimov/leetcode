/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
    const stack = [];

    if (s.length === 1) {
        return s[0];
    }

    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack.at(-1).toLowerCase() === s[i].toLowerCase() && stack.at(-1) !== s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length === 0) {
        return '';
    }

    return stack.join('');
};

//Constraints:
// 1 <= s.length <= 100
// s contains only lower and upper case English letters.