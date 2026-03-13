/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
const mapWordWeights = function(words, weights) {
    let result = '';

    for (let i = 0; i < words.length; i++) {
        let currentWordModuloSum = 0;

        for (let j = 0; j < words[i].length; j++) {
            const charCode = words[i].charCodeAt(j);
            const index = charCode - 97;
            currentWordModuloSum = (currentWordModuloSum + weights[index]) % 26;
        }

        result += String.fromCharCode(122 - currentWordModuloSum);
    }

    return result;
};

//Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 10
// weights.length == 26
// 1 <= weights[i] <= 100
// words[i] consists of lowercase English letters.