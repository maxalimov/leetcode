/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
    const arr = s.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            let left = i > 0 ? arr[i - 1] : null;
            let right = i < arr.length - 1 ? arr[i + 1] : null;

            for (let j = 0; j < alphabet.length; j++) {
                const character = alphabet[j];

                if (character !== left && character !== right) {
                    arr[i] = character;
                    break;
                }
            }
        }
    }

    return arr.join('');
};

//Constraints:
// 1 <= s.length <= 100
// s consist of lowercase English letters and '?'.