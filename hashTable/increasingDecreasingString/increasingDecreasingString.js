/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
    const frequency = {};
    let result = '';

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    const up = Object.keys(frequency).sort();
    const down = [...up].reverse();
    let lastLetter = null;

    while (Object.values(frequency).some(count => count > 0)) {
        for (const letter of up) {
            if (frequency[letter] > 0 && (lastLetter === null || letter > lastLetter)) {
                result += letter;
                frequency[letter]--;
                lastLetter = letter;
            }
        }

        lastLetter = null

        for (const letter of down) {
            if (frequency[letter] > 0 && (lastLetter === null || letter < lastLetter)) {
                result += letter;
                frequency[letter]--;
                lastLetter = letter;
            }
        }

        lastLetter = null;
    }

    return result;
};

//Constraints:
// 1 <= s.length <= 500
// s consists of only lowercase English letters.