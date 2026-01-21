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
const preorderTraversal = function(root) {
    const result = [];

    const DFSPreorder = (node) => {
        if (node === null) {
            return;
        }

        result.push(node.val);
        DFSPreorder(node.left);
        DFSPreorder(node.right);
    }

    DFSPreorder(root);

    return result;
};

//Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100