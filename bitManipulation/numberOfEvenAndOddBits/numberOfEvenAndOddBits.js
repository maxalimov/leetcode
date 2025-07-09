/**
 * @param {number} n
 * @return {number[]}
 */
const evenOddBit = function(n) {
    const binary = n.toString(2);
    let evenCounter = 0;
    let oddCounter = 0;

    for (let i = 0; i < binary.length; i++) {

        const bit = binary[binary.length - 1 - i];

        if (bit === '1') {
            if (i % 2 === 0) {
                evenCounter++;
            } else {
                oddCounter++;
            }
        }
    }

    return [evenCounter, oddCounter];
};

//Constraints:
// 1 <= n <= 1000