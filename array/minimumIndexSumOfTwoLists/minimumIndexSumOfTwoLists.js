/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const common = [];

    for (let i = 0; i < list1.length; i++) {
        if (list2.includes(list1[i])) {
            common.push(list1[i]);
        }
    }

    if (common.length === 1) {
        return common;
    }

    let leastIndex = Infinity;

    for (let i = 0; i < common.length; i++) {
        const first = list1.indexOf(common[i]);
        const second = list2.indexOf(common[i]);
        leastIndex = Math.min(leastIndex, first + second);
    }

    const result = [];

    for (let i = 0; i < common.length; i++) {
        const first = list1.indexOf(common[i]);
        const second = list2.indexOf(common[i]);
        if (first + second === leastIndex) {
            result.push(common[i]);
        }
    }

    return result;
};

//Constraints:
// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the strings of list1 are unique.
// All the strings of list2 are unique.
// There is at least a common string between list1 and list2.