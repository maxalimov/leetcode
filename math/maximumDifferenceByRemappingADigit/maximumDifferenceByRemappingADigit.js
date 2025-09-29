/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = function(num) {
    let numStr = num.toString();

    let maxVal = numStr;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== '9') {
            maxVal = numStr.replaceAll(numStr[i], '9');
            break;
        }
    }

    let minVal = numStr;
    if (numStr[0] !== '0') {
        minVal = numStr.replaceAll(numStr[0], '0');
    }

    return parseInt(maxVal) - parseInt(minVal);
};

//Constraints:
// 1 <= num <= 108