/**
 * @param {string} s
 * @return {number}
 */
const maxDifference = function(s) {
    const freq = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    const oddFreqs = [];
    const evenFreqs = [];

    for (const char in freq) {
        const f = freq[char];
        if (f % 2 === 0) {
            evenFreqs.push(f);
        } else {
            oddFreqs.push(f);
        }
    }

    let maxDiff = -Infinity;

    for (const odd of oddFreqs) {
        for (const even of evenFreqs) {
            maxDiff = Math.max(maxDiff, odd - even);
        }
    }

    return maxDiff;
};

//Constraints:
// 3 <= s.length <= 100
// s consists only of lowercase English letters.
// s contains at least one character with an odd frequency and one with an even frequency.