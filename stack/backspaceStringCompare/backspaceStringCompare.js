/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const compareString = (str) => {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            if (result.length) {
                result.pop();
            }
        } else {
            result.push(str[i]);
        }
    }

    return result.join('');
};

const backspaceCompare = function(s, t) {
    return compareString(s) === compareString(t);
};

//Constraints:
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.