/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
    const keys = [...rooms[0]];
    const visited = new Set([0]);

    while (keys.length) {
        const key = keys.pop();

        if (!visited.has(key)) {
            visited.add(key);
            keys.push(...rooms[key]);
        }
    }

    return visited.size === rooms.length;
};

//Constraints:
// n == rooms.length
// 2 <= n <= 1000
// 0 <= rooms[i].length <= 1000
// 1 <= sum(rooms[i].length) <= 3000
// 0 <= rooms[i][j] < n
// All the values of rooms[i] are unique.