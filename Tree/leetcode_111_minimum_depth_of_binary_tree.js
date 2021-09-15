/**
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
 */
//求最小深度考虑用广度优先遍历
//在广度优先遍历过程中， 遇到叶子节点， 停止遍历， 返回节点层级
//广度优先遍历整棵树， 并记录每个节点的层级
//遇到叶子节点就return
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
 var minDepth = function(root) {
    if(!root) { return 0; }
    const q = [[root, 1]];
    while(q.length) {
      const [n, l] = q.shift();
      if(!n.left && !n.right) {
        return l;
      }
      if(n.left) q.push([n.left, l+1]);
      if(n.right) q.push([n.right, l+1]);
    }
};