/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
const closestTarget = function(words, target, startIndex) {
    if (!words.includes(target)) {
        return -1;
    }

    if (words[startIndex] === target) {
        return 0;
    };

    let firstDistance = 0;
    let secondDistance = 0;
    let foundLeft = false;
    let foundRight = false;
    const n = words.length;

    for (let i = 1; i < n; i++) {
        if (!foundRight) {
            if (words[(startIndex + i) % n] === target) {
                foundRight = true;
                firstDistance = i;
            }
        }

        if (!foundLeft) {
            if (words[(startIndex - i + n) % n] === target) {
                foundLeft = true;
                secondDistance = i;
            }
        }

        if (foundLeft && foundRight) break;
    }

    if (firstDistance === -1) {
        return secondDistance;
    };

    if (secondDistance === -1) {
        return firstDistance;
    };

    return Math.min(firstDistance, secondDistance);
};

//Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] and target consist of only lowercase English letters.
// 0 <= startIndex < words.length