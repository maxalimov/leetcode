/**
 * @param {number[][]} edges
 * @return {number}
 */

//First approach
// const findCenter = function(edges) {
//     const firstCandidate = edges[0][0];
//     const secondCandidate = edges[0][1];

//     return edges.every(edge => edge.includes(firstCandidate)) ? firstCandidate : secondCandidate
// };


const findCenter = function(edges) {
    return (
        edges[0][0] === edges[1][0] ||
        edges[0][0] === edges[1][1]
    ) ? edges[0][0] : edges[0][1]
};

//Constraints:
// 3 <= n <= 105
// edges.length == n - 1
// edges[i].length == 2
// 1 <= ui, vi <= n
// ui != vi
// The given edges represent a valid star graph.