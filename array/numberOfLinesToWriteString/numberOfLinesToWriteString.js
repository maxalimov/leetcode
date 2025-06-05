/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function(widths, s) {
    let line = 1;
    let pixels = 0;

    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - 97;

        if (pixels + widths[index] <= 100) {
            pixels += widths[index];
        } else if ((pixels + widths[index]) >= 100) {
            line++;
            pixels = 0 + widths[index];
        }
    }

    return [line, pixels]
};

//Constraints:
//widths.length == 26
// 2 <= widths[i] <= 10
// 1 <= s.length <= 1000
// s contains only lowercase English letters.