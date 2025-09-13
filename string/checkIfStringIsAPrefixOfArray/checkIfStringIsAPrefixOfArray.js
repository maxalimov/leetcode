/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function(s, words) {
    let result = '';

    for (let i = 0; i < words.length; i++) {
        result += words[i];

        if (result === s) {
            return true;
        }

        if (result.length > s.length) {
            return false;
        }
    }

    return false;
};

//Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// 1 <= s.length <= 1000
// words[i] and s consist of only lowercase English letters.