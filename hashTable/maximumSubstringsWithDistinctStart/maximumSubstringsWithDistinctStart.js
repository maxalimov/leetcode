/**
 * @param {string} s
 * @return {number}
 */
const maxDistinct = function(s) {
    return new Set(s).size
};

//Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.