/**
 * @param {string} s
 * @return {number}
 */
const maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const frequency = {};
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    for (const key in frequency) {
        if (vowels.has(key)) {
            maxVowel = Math.max(frequency[key], maxVowel);
        } else {
            maxConsonant = Math.max(frequency[key], maxConsonant);
        }
    }

    return maxVowel + maxConsonant;
};

//Constraints:
// 1 <= s.length <= 100
// s consists of lowercase English letters only.