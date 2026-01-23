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
 * @return {number}
 */

const getMaxDepth = (node) => {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
};

const deepestLeavesSum = function(root) {
    const maxDepth = getMaxDepth(root);
    let sum = 0;

    const DFSPostOrder = (node, currentDepth) => {
        if (!node) {
            return;
        }

        if (currentDepth === maxDepth) {
            sum += node.val;
        }

        DFSPostOrder(node.left, currentDepth + 1);
        DFSPostOrder(node.right, currentDepth + 1);
    };

    DFSPostOrder(root, 1);

    return sum;
};

//Constraints:
// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100