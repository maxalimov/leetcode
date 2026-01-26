/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reversePrefix = function(s, k) {
    const arr = s.split('');
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
};

//Constraints:
// 1 <= s.length <= 100
// s consists of lowercase English letters.
// 1 <= k <= s.length