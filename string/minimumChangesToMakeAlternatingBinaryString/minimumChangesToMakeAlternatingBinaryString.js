/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function(s) {
    let zeroCounter = 0;
    let oneCounter = 0;

    for (let i = 0; i < s.length; i++) {
        //for string 0101 etc...
        const expectedZero = (i % 2 === 0) ? '0' : '1';

        //for string 1010 etc...
        const expectedOne = (i % 2 === 0) ? '1' : '0';

        if (s[i] !== expectedZero) {
            zeroCounter++;
        }

        if (s[i] !== expectedOne) {
            oneCounter++;
        }
    }

    return Math.min(zeroCounter, oneCounter);
};

//Constraints:
// 1 <= s.length <= 104
// s[i] is either '0' or '1'.