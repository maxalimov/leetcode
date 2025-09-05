/**
 * @param {number} n
 * @return {string}
 */
// const concatHex36 = function(n) {
//     const hexadecimal = (n ** 2).toString(16);
//     const hexatrigesimal = (n ** 3).toString(36);

//     return (hexadecimal + hexatrigesimal).toUpperCase();
// };

function concatHex36(n) {
    let n2 = n * n;
    let n3 = n * n * n;

    function convert(num, base) {
        if (num === 0) return "0";

        let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";

        while (num > 0) {
            let remainder = num % base;
            result = digits[remainder] + result;
            num = Math.floor(num / base);
        }

        return result;
    }

    let base16 = convert(n2, 16);
    let base36 = convert(n3, 36);

    return base16 + base36;
}
