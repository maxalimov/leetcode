/**
 * @param {number} n
 */
class OrderedStream {
    constructor(n) {
        this.stream = new Array(n).fill(null);
        this.ptr = 0;
    }

    /**
     * @param {number} idKey
     * @param {string} value
     * @return {string[]}
     */
    insert(idKey, value) {
        this.stream[idKey - 1] = value;

        const chunk = [];

        while(this.stream[this.ptr]) {
            chunk.push(this.stream[this.ptr]);
            this.ptr++;
        }

        return chunk;
    }
}

//Constraints:
// 1 <= n <= 1000
// 1 <= id <= n
// value.length == 5
// value consists only of lowercase letters.
// Each call to insert will have a unique id.
// Exactly n calls will be made to insert.