/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) {
    const charIndex = word.indexOf(ch);
    if (charIndex === -1) return word;

    const stack = [];

    for (let i = 0; i <= charIndex; i++) {
        stack.push(word[i]);
    }

    let result = '';

    while (stack.length) {
        result += stack.pop();
    }

    result += word.slice(charIndex + 1);

    return result;
};

//Constraints:
// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.