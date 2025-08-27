/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// const reverseStr = function(s, k) {
//     let result = [];
//     let reverse = true;
//
//     for (let i = 0; i < s.length; i += k) {
//         const substr = s.slice(i, i + k);
//
//         if (reverse) {
//             result.push(...substr.split('').reverse())
//         } else {
//             result.push(...substr);
//         }
//
//         reverse = !reverse;
//     }
//
//     return result.join('');
// };

const reverseStr = function(s, k) {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
};

//Constraints:
// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104