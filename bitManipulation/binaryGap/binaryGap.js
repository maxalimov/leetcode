/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function(n) {
    const binary = n.toString(2);
    let currentOne = binary.indexOf('1');
    let longestDistance = 0;

    for (let i = currentOne; i < binary.length - 1; i++) {
        if (binary[i + 1] === '1') {

            if ((i + 1) - currentOne > longestDistance) {
                longestDistance = (i + 1) - currentOne;
            }

            currentOne = i + 1;
        }
    }

    return longestDistance;
};

//Constraints:
// 1 <= n <= 109