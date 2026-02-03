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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    const traverse = (node) => {
        if (!node) {
            return;
        }

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);

    return root;
};

//Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100