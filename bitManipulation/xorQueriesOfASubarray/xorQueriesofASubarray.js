/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function(arr, queries) {
    const prefixXor = new Array(arr.length + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }

    const result = [];

    for (let i = 0; i < queries.length; i++) {
        const [left, right] = queries[i];
        result.push(prefixXor[right + 1] ^ prefixXor[left]);
    }

    return result;
};

//Constraints:
// 1 <= arr.length, queries.length <= 3 * 104
// 1 <= arr[i] <= 109
// queries[i].length == 2
// 0 <= lefti <= righti < arr.length