/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
const modifiedList = function(nums, head) {
    const set = new Set(nums);
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr !== null) {
        if (set.has(curr.val)) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return dummy.next;
};

//Constraints:
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// All elements in nums are unique.
// The number of nodes in the given list is in the range [1, 105].
// 1 <= Node.val <= 105
// The input is generated such that there is at least one node in the linked list that has a value not present in nums.