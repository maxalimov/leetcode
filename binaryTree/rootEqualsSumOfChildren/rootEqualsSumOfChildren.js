/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const checkTree = function(root) {
    return root.val === (root.left.val + root.right.val);
};

//Constraints:
// The tree consists only of the root, its left child, and its right child.
// -100 <= Node.val <= 100