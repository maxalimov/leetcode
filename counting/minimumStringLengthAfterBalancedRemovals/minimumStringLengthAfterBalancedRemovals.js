/**
 * @param {string} s
 * @return {number}
 */

const minLengthAfterRemovals = function(s) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            a++;
        } else {
            b++;
        }
    }

    return Math.abs(a - b);
};

//Constraints:
// 1 <= s.length <= 105
// s[i] is either 'a' or 'b'.