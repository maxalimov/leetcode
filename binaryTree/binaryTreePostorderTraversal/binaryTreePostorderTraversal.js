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
const postorderTraversal = function(root) {
    const result = [];

    const DFSPostOrder = (node) => {
        if (!node) {
            return;
        }

        DFSPostOrder(node.left);
        DFSPostOrder(node.right);
        result.push(node.val);
    }

    DFSPostOrder(root);

    return result;
};

//Constraints:
// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100