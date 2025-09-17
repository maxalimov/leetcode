/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = function(brackets, income) {
    let tax = 0;
    let prevUpper = 0;

    for (const [upper, percent] of brackets) {
        const taxable = Math.min(upper, income) - prevUpper;

        if (taxable <= 0) {
            return tax;
        }

        tax += taxable * (percent / 100);
        prevUpper = upper;
    }

    return tax;
};

//Constraints:
// 1 <= brackets.length <= 100
// 1 <= upperi <= 1000
// 0 <= percenti <= 100
// 0 <= income <= 1000
// upperi is sorted in ascending order.
// All the values of upperi are unique.
// The upper bound of the last tax bracket is greater than or equal to income.