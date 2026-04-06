/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const convertToBinary = (n) => {
    let nCopy = n;
    let binary = '';

    while (nCopy > 0) {
        binary = (nCopy % 2) + binary;
        nCopy = Math.floor(nCopy / 2);
    }

    return binary;
};

const hammingDistance = function(x, y) {
    let binaryX = convertToBinary(x);
    let binaryY = convertToBinary(y);
    const maxLength = Math.max(binaryX.length, binaryY.length);

    binaryX = binaryX.padStart(maxLength, 0);
    binaryY = binaryY.padStart(maxLength, 0);

    let diff = 0;

    for (let i = 0; i < binaryX.length; i++) {
        if (binaryX[i] !== binaryY[i]) {
            diff++;
        }
    }

    return diff;
};

//Constraints: // 0 <= x, y <= 2^31 - 1