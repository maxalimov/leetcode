/**
 * @param {string} s
 * @return {string}
 */
const majorityFrequencyGroup = function(s) {
    const frequency = {}
    const frequencyGroup = {};

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    for (const key in frequency) {
        if (frequencyGroup[frequency[key]]) {
            frequencyGroup[frequency[key]] += key;
        } else {
            frequencyGroup[frequency[key]] = key;
        }
    }

    let result = '';
    let maxKey = 0;

    for (const key in frequencyGroup) {
        if (
            frequencyGroup[key].length > result.length ||
            (frequencyGroup[key].length === result.length && +key > maxKey)
        ) {
            result = frequencyGroup[key];
            maxKey = +key;
        }
    }

    return result;
};

//Constraints:
// 1 <= s.length <= 100
// s consists only of lowercase English letters.