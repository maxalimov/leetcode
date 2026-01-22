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
 * @return {number[]}
 */

//TODO: add iterative solution
const inorderTraversal = function(root) {
    const result = [];

    const inorder = (node) => {
        if (!node) {
            return;
        }

        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    };

    inorder(root);
    return result;
};

//Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100