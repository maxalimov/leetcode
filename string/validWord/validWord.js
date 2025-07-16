/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = function(word) {
    if (word.length < 3) return false;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let digits = 0;
    let validChars = 0;
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        if (ch >= '0' && ch <= '9') {
            digits++;
            continue;
        }

        const lower = ch.toLowerCase();
        const upper = ch.toUpperCase();

        //not a letter
        if (upper === lower) return false;

        if (vowels.has(lower)) {
            hasVowel = true;
        } else {
            hasConsonant = true;
        }

        validChars++;
    }

    return (validChars + digits >= 3) && hasVowel && hasConsonant;
};

//Constraints:
// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.