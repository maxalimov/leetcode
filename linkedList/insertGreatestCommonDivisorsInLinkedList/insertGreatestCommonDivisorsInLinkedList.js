const gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

const insertGreatestCommonDivisors = function(head) {
    let current = head;
    let next = head.next;

    while (next !== null) {
        const gcdVal = gcd(current.val, next.val);
        const newNode = {val: gcdVal, next: null};
        current.next = newNode;
        newNode.next = next;

        current = next;
        next = next.next;
    }

    return head;
};

//Constraints:
// The number of nodes in the list is in the range [1, 5000].
// 1 <= Node.val <= 1000