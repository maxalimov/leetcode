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

const maxDepth = (node) => {
    if (!node) {
        return 0;
    }

    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};

const findBottomLeftValue = function(root) {
    const depth = maxDepth(root);

    const dfs = (node, currentDepth) => {
        if (!node) {
            return null;
        }

        if (currentDepth === depth) {
            return node.val;
        }

        const left = dfs(node.left, currentDepth + 1);

        if (left !== null) {
            return left;
        }

        return dfs(node.right, currentDepth + 1);
    };

    return dfs(root, 1);
};

//Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1