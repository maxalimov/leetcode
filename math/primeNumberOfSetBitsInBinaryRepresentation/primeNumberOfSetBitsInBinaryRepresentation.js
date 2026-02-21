/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const convertToBinary = (number) => {
    let numberCopy = number;
    let binary = '';

    while (numberCopy > 0) {
        binary = (numberCopy % 2) + binary;
        numberCopy = Math.floor(numberCopy / 2);
    }

    return binary;
};

const isNumberPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const countPrimeSetBits = function(left, right) {
    let counter = 0;

    for (let i = left; i <= right; i++) {
        const binary = convertToBinary(i);
        let setBitsCounter = 0;

        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === '1') {
                setBitsCounter++;
            }
        }

        if (isNumberPrime(setBitsCounter)) {
            counter++;
        }
    }

    return counter;
};