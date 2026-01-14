class RandomizedSet {
    constructor() {
        this.storage = {};
        this.arrStorage = [];
    }
    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (!(val in this.storage)) {
            this.arrStorage.push(val);
            this.storage[val] = this.arrStorage.length - 1;
            return true;
        }

        return false;
    }
    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!(val in this.storage)) {
            return false
        }

        const idxToRemove = this.storage[val];
        const lastElement = this.arrStorage[this.arrStorage.length - 1];

        this.arrStorage[idxToRemove] = lastElement;
        this.storage[lastElement] = idxToRemove;

        this.arrStorage.pop();
        delete this.storage[val];

        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        return this.arrStorage[Math.floor(Math.random() * this.arrStorage.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//Constraints:
// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.