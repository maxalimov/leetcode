/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = function(s, k, fill) {
    const chunks = [];

    for (let i = 0; i < s.length; i += k) {
        chunks.push(s.slice(i, i + k).padEnd(k, fill));
    }

    return chunks;
};

//Constraints:
// 1 <= s.length <= 100
// s consists of lowercase English letters only.
// 1 <= k <= 100
// fill is a lowercase English letter.