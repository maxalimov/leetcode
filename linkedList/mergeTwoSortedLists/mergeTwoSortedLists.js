/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0, null);
    let merged = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            merged.next = list1;
            list1 = list1.next;
        } else {
            merged.next = list2;
            list2 = list2.next;
        }

        merged = merged.next;
    }

    merged.next = list1 || list2;

    return dummy.next;
};

//Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.