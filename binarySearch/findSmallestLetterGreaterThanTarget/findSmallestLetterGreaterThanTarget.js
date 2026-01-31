/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return letters[left] || letters[0];
};

//Constraints:
// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.