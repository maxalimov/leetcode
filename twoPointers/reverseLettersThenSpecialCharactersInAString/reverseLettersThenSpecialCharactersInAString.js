/**
 * @param {string} s
 * @return {string}
 */
const reverseByType = function(s) {
    s = s.split('');

    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        while (i < s.length && !(s[i] >= 'a' && s[i] <= 'z')) {
            i++;
        }

        while (j >= 0 && !(s[j] >= 'a' && s[j] <= 'z')) {
            j--;
        }

        if (i < j) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }

    i = 0;
    j = s.length - 1;

    while (i < j) {

        while (i < s.length && (s[i] >= 'a' && s[i] <= 'z')) {
            i++;
        }

        while (j >= 0 && (s[j] >= 'a' && s[j] <= 'z')) {
            j--;
        }

        if (i < j) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }

    return s.join('');
};

//Constraints:
// 1 <= s.length <= 100
// s consists only of lowercase English letters and the special characters in "!@#$%^&*()".