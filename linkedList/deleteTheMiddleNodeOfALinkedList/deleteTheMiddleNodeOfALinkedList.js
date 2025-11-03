/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = function(head) {
    let slowPointer = head;
    let fastPointer = head;
    let prev = head;

    if (head.next === null) {
        return null;
    }

    while (fastPointer && fastPointer.next) {
        prev = slowPointer;
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    prev.next = slowPointer.next;
    slowPointer.next = null;

    return head;
};

//Constraints:
// The number of nodes in the list is in the range [1, 105].
// 1 <= Node.val <= 105