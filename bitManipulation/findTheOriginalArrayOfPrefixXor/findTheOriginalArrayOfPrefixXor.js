/**
 * @param {number[]} pref
 * @return {number[]}
 */
const findArray = function(pref) {
    const result = [pref[0]];

    for (let i = 1; i < pref.length; i++) {
        result.push(pref[i - 1] ^ pref[i]);
    }

    return result;
};

//Constraints:
// 1 <= pref.length <= 105
// 0 <= pref[i] <= 106