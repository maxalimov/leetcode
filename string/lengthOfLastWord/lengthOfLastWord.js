/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const trimmedString = s.trim();
    let lastWord = '';

    for (let i = trimmedString.length - 1; i >= 0; i--) {
        if (trimmedString[i] === ' ') {
            return lastWord.length;
        } else {
            lastWord = trimmedString[i] + lastWord;
        }
    }

    return lastWord.length;
};

//Constraints:
// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.