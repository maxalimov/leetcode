class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return - 1;
        }

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp.val;
    }

    addAtHead(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    addAtTail(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return;
        }

        if (index === this.length) {
            return this.addAtTail(val);
        }

        if (index === 0) {
            return this.addAtHead(val);
        }

        const newNode = new Node(val);
        let before = this.head;

        for (let i = 0; i < index - 1; i++) {
            before = before.next;
        }

        newNode.next = before.next;
        before.next = newNode;
        this.length++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        if (index === this.length - 1) {
            if (!this.head) {
                return;
            }

            let before = this.head;
            let temp = this.head;

            while (temp.next) {
                before = temp;
                temp = temp.next;
            }

            this.tail = before;
            this.tail.next = null;
            this.length--;

            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }

            return
        }

        let before = this.head;

        for (let i = 0; i < index - 1; i++) {
            before = before.next;
        }

        let temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
    }
}

//Constraints:
// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.