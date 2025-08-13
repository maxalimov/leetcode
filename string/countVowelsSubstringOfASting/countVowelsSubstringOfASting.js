/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function(word) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        let uniqueCounter = 0;

        for (let j = i; j < word.length; j++) {
            const ch = word[j];

            if (!vowels.has(ch)) {
                break;
            }

            if (counts[ch] === 0) {
                uniqueCounter++;
            }

            counts[ch]++;

            if (uniqueCounter === 5) {
                counter++;
            }
        }
    }

    return counter;
};

//Constraints:
// 1 <= word.length <= 100
// word consists of lowercase English letters only.