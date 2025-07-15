/**
 * @param {string} word
 * @return {number}
 */
const possibleStringCount = function(word) {
    let consecutiveCounter = 1;

    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            consecutiveCounter++;
        } else if (word[i] === word[i - 1] && i === word.length - 1) {
            consecutiveCounter++;
        }
    }

    return consecutiveCounter;
};

//Constraints:
// 1 <= word.length <= 100
// word consists only of lowercase English letters.