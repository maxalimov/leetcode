class SmallestInfiniteSet {
    constructor() {
        this.current = 1;
        this.addedBack = new Set();
    }

    popSmallest() {
        if (this.addedBack.size) {
            const smallest = Math.min(...this.addedBack);

            if (smallest < this.current) {
                this.addedBack.delete(smallest);
                return smallest;
            }
        }

        return this.current++;
    }

    addBack(num) {
        if (num < this.current) {
            this.addedBack.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

//Constraints:
// 1 <= num <= 1000
// At most 1000 calls will be made in total to popSmallest and addBack.