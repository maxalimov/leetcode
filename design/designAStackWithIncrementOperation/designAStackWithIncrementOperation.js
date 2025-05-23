class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    isFull() {
        return this.stack.length === this.maxSize;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(x) {
        if (!this.isFull()) {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.stack.pop();
    }

    increment(k, val) {
        const limit = Math.min(k, this.stack.length);
        for (let i = 0; i < limit; i++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

//Constraints:
// 1 <= maxSize, x, k <= 1000
// 0 <= val <= 100
// At most 1000 calls will be made to each method of increment, push and pop each separately.