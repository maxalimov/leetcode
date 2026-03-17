/**
 * @param {number} n
 * @return {number}
 */

const convertToBinary = (number) => {
    let binary = '';
    let numberCopy = number;

    while (numberCopy > 0) {
        binary = numberCopy % 2 + binary;
        numberCopy = Math.floor(numberCopy / 2);
    }

    return binary
};

const isMonobit = (binary) => {
    for (let i = 1; i < binary.length; i++) {
        if (binary[0] !== binary[i]) {
            return false;
        }
    }

    return true;
};

const countMonobit = function(n) {
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        const binary = convertToBinary(i);

        if (isMonobit(binary)) {
            counter++;
        }
    }

    return counter;
};

//Constraints:
// 0 <= n <= 1000