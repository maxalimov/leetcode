/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {
        return true;
    }

    if (s1.length !== s2.length) {
        return false;
    }

    let diff1 = [];
    let diff2 = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff1.push(s1[i]);
            diff2.push(s2[i]);
        }
    }

    if (diff1.length > 2 || diff2.length > 2) {
        return false;
    }

    return diff1[0] === diff2[1] && diff1[1] === diff2[0];
};

//Constraints:
// 1 <= s1.length, s2.length <= 100
// s1.length == s2.length
// s1 and s2 consist of only lowercase English letters.