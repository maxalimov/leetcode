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
const sumRootToLeaf = function(root) {
    const DFS = (node, currentNumber) => {
        if (!node) {
            return 0;
        }

        currentNumber = (currentNumber * 2) + node.val;

        if (!node.left && !node.right) {
            return currentNumber;
        }

        return DFS(node.left, currentNumber) + DFS(node.right, currentNumber)
    };

    return DFS(root, 0);
};

//Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.