/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// const countOdds = function(low, high) {
//     let counter = 0;

//     for (let i = low; i <= high; i++) {
//         if (i % 2 !== 0) {
//             counter++;
//         }
//     }

//     return counter;
// };

const countOdds = function(low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};

//Constraints:
// 0 <= low <= high <= 10^9