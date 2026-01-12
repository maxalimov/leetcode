/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
    const result = new Set();

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i != j && words[i].includes(words[j])) {
                result.add(words[j]);
                break;
            }
        }
    }

    return [...result];
};

//NOTE: Learn KMP alg and improve

//Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// All the strings of words are unique.