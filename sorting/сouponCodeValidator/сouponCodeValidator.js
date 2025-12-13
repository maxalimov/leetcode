/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
const validateCoupons = function(code, businessLine, isActive) {
    const categories = ['electronics', 'grocery', 'pharmacy', 'restaurant'];
    const categoryOrder = new Map(categories.map((c, i) => [c, i]));
    const validCoupons = [];

    for (let i = 0; i < code.length; i++) {
        if (categoryOrder.has(businessLine[i]) && isActive[i] && /^[a-zA-Z0-9_]+$/.test(code[i])) {
            validCoupons.push({code: code[i], businessLine: businessLine[i]});
        }
    }

    validCoupons.sort((a,b) => {
        if (a.businessLine !== b.businessLine) {
            return categoryOrder.get(a.businessLine) - categoryOrder.get(b.businessLine)
        }

        if (a.code < b.code) return -1;
        if (a.code > b.code) return 1;
        return 0;
    });

    return validCoupons.map(c => c.code);
};

//Constraints:
// n == code.length == businessLine.length == isActive.length
// 1 <= n <= 100
// 0 <= code[i].length, businessLine[i].length <= 100
// code[i] and businessLine[i] consist of printable ASCII characters.
// isActive[i] is either true or false.