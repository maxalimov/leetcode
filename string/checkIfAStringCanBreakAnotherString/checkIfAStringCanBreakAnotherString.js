/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = function(s1, s2) {
    const sortedS1 = s1.split('').sort();
    const sortedS2 = s2.split('').sort();

    let canS1BreakS2 = true;
    let canS2BreakS1 = true;

    for (let i = 0; i < sortedS1.length; i++) {
        if (sortedS1[i] < sortedS2[i]) {
            canS1BreakS2 = false;
        }

        if (sortedS2[i] < sortedS1[i]) {
            canS2BreakS1 = false;
        }
    }

    return canS1BreakS2 || canS2BreakS1;
};

//Constraints:
// s1.length == n
// s2.length == n
// 1 <= n <= 10^5
// All strings consist of lowercase English letters.