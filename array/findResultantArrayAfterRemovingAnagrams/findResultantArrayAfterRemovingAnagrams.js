/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = function(words) {
    const result = [];
    let prev = '';

    for (let i = 0; i < words.length; i++) {
        const sorted = words[i].split('').sort().join('');

        if (sorted !== prev) {
            result.push(words[i]);
            prev = sorted;
        }
    }

    return result;
};

//Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.