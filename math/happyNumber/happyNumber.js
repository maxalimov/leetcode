/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set();
    let currentNumber = n;

    while (currentNumber !== 1) {
        const stringNum = String(currentNumber);
        let newCurrentNumber = 0;

        for (let i = 0; i < stringNum.length; i++) {
            newCurrentNumber += stringNum[i] ** 2;
        }

        if (set.has(newCurrentNumber)) {
            return false;
        }

        set.add(newCurrentNumber)

        currentNumber = newCurrentNumber;
    }

    return true;
};

//Constraints:
// 1 <= n <= 231 - 1