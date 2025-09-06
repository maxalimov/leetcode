/**
 * @param {number[]} colors
 * @return {number}
 */
const numberOfAlternatingGroups = function(colors) {
    let alternatingGroups = 0;

    for (let i = 0; i < colors.length; i++) {
        const left = colors[(i - 1 + colors.length) % colors.length];
        const middle = colors[i % colors.length];
        const right = colors[(i + 1) % colors.length];

        if (left === right && middle !== left && middle !== right) {
            alternatingGroups++;
        }
    }

    return alternatingGroups;
};

//Constraints:
// 3 <= colors.length <= 100
// 0 <= colors[i] <= 1