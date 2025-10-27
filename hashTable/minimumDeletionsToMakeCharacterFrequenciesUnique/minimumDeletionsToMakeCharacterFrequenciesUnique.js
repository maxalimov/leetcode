/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = function(s) {
    const frequency = {};

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    const used = new Set();
    let deletions = 0;

    for (const key in frequency) {
        let f = frequency[key];

        while (f > 0 && used.has(f)) {
            f--;
            deletions++;
        }

        if (f > 0) {
            used.add(f);
        }
    }

    return deletions;
};

//Constraints:
// 1 <= s.length <= 105
// s contains only lowercase English letters.