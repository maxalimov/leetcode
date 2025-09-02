/**
 * @param {number} n
 * @return {number}
 */
const getLeastFrequentDigit = function(n) {
    const frequency = new Map();
    const stringNum = String(n);

    for (let i = 0; i < stringNum.length; i++) {
        if (frequency.has(stringNum[i])) {
            frequency.set(stringNum[i], frequency.get(stringNum[i]) + 1);
        } else {
            frequency.set(stringNum[i], 1);
        }
    }

    let minFreq = stringNum.length + 1;
    let minDigit = 9;

    for (const [key, value] of frequency) {
        if (value < minFreq) {
            minFreq = value;
            minDigit = +key;
        }

        if (value === minFreq) {
            if (key < minDigit) {
                minFreq = value;
                minDigit = +key;
            }
        }
    }

    return minDigit;
};

//Constraints:
// 1 <= n <= 2^31 - 1