class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MinStack {
    constructor() {
        this.stack = null;
        this.minStack = null;
    }

    push(value) {
        const newNode = new Node(value);

        newNode.next = this.stack;
        this.stack = newNode;

        if (!this.minStack || value <= this.minStack.value) {
            const newMinNode = new Node(value);
            newMinNode.next = this.minStack;
            this.minStack = newMinNode;
        }
    }

    pop() {
        if (!this.stack) {
            return;
        }

        const poppedValue = this.stack.value;
        this.stack = this.stack.next;

        if (poppedValue === this.minStack.value) {
            this.minStack = this.minStack.next;
        }
    }

    top() {
        return this.stack.value;
    }

    getMin() {
        return this.minStack.value;
    }
}

//Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.