/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const getEncryptedString = function(s, k) {
    let encryptedString = '';

    for (let i = 0; i < s.length; i++) {
        encryptedString += s[(i + k) % s.length];
    }

    return encryptedString;
};

//Constraints:
// 1 <= s.length <= 100
// 1 <= k <= 104
// s consists only of lowercase English letters.