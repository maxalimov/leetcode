/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const charCode = columnTitle.charCodeAt(i) - 64;
        result = result * 26 + charCode;
    }

    return result;
};

//Constraints:
// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].