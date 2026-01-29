/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function(original, cloned, target) {
    const dfs = (og, clone) => {
        if (!og) {
            return null;
        }

        if (og === target) {
            return clone;
        }

        return dfs(og.left, clone.left) || dfs(og.right, clone.right);
    };

    return dfs(original, cloned);
};

//Constraints:
// The number of nodes in the tree is in the range [1, 104].
// The values of the nodes of the tree are unique.
// target node is a node from the original tree and is not null.