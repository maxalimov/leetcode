/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
const twoEditWords = function(queries, dictionary) {
    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];

        for (let j = 0; j < dictionary.length; j++) {
            const dictWord = dictionary[j];

            let diff = 0;

            for (let k = 0; k < dictWord.length; k++) {
                if (query[k] !== dictWord[k]) {
                    diff++;
                }

                if (diff > 2) {
                    break;
                }
            }

            if (diff <= 2) {
                result.push(query);
                break;
            }
        }
    }

    return result;
};

//Constraints:
// 1 <= queries.length, dictionary.length <= 100
// n == queries[i].length == dictionary[j].length
// 1 <= n <= 100
// All queries[i] and dictionary[j] are composed of lowercase English letters.