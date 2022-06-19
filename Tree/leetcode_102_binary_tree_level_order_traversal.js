/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:
Input: root = [1]
Output: [[1]]
Example 3:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
 */
// 二叉树层序遍历
//层序遍历顺序就是广度优先遍历， 差别就是在遍历时需要记录当前节点所处的层级， 方便添加到不同的数组中
//广度优先遍历， use queue, 过程中记录每个节点的层级， 添加到不同数组中
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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if(!root) return [];
//     const q = [[root, 0]];
//     const res = [];
//     while(q.length) {
//       const [n, level] = q.shift();
//       if(!res[level]){
//         res.push([n.val]);
//       }else {
//         res[level].push(n.val);
//       }
//       if(n.left) q.push([n.left, level+1]);
//       if(n.right) q.push([n.right, level+1]);

//     }
//     return res;
// };
// optimization
var levelOrder = function(root) {
  if(!root) return [];
  const q = [[root, 0]];
  const res = [];
  while(q.length) {
    let len = q.length;
    res.push([]);
    //每次去除老节点， 加入新节点
    while(len--){
      const [n, level] = q.shift();
      res[res.length - 1].push(n.val);
      if(n.left) q.push([n.left, level+1]);
      if(n.right) q.push([n.right, level+1]);
    }
  }
  return res;
};