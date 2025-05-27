/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = function(s) {
    const splittedWords = s.split(' ');
    const iteration = Math.max(...splittedWords.map(word => word.length));
    let result = [];
    let outerIndex = 0;

    for (let i = 0; i < iteration; i++) {
        let word = '';

        for (let j = 0; j < splittedWords.length; j++) {
            if (splittedWords[j][outerIndex]) {
                word += splittedWords[j][outerIndex]
            } else {
                word += ' ';
            }
        }

        outerIndex++;
        result.push(word);
    }

    return result.map(word => word.trimEnd())
};

//Constraints:
// 1 <= s.length <= 200
// s contains only upper case English letters.
// It's guaranteed that there is only one space between 2 words.