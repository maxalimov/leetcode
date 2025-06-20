/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = function(s, k) {
    if (s.length <= k) {
        return s;
    }

    while (s.length > k) {
        let newString = '';

        for (let i = 0; i < s.length; i += k) {
            let part = s.slice(i, i + k);
            let sum = 0;

            for (let j = 0; j < part.length; j++) {
                sum += +part[j];
            }

            newString += sum;
        }

        s = newString;
    }

    return s;
};

//Constraints:
// 1 <= s.length <= 100
// 2 <= k <= 100
// s consists of digits only.