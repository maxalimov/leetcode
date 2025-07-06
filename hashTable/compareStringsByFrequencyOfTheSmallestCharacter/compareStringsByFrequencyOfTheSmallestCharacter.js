/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

const getFrequency = (word) => {
    let smallestChar = word[0];

    for (let i = 0; i < word.length; i++) {
        if (word[i] < smallestChar) {
            smallestChar = word[i];
        }
    }

    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === smallestChar) {
            count++;
        }
    }

    return count;
};

const numSmallerByFrequency = function(queries, words) {
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        let counter = 0;
        const queryFrequency = getFrequency(queries[i]);

        for (let j = 0; j < words.length; j++) {
            if (getFrequency(words[j]) > queryFrequency) {
                counter++;
            }
        }

        result.push(counter);
    }

    return result;
};

//Constraints:
// 1 <= queries.length <= 2000
// 1 <= words.length <= 2000
// 1 <= queries[i].length, words[i].length <= 10
// queries[i][j], words[i][j] consist of lowercase English letters.