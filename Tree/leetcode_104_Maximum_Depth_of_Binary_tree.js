/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */
//求最大深度， 考虑使用深度优先遍历
//记录每个节点所在的层级， 找出最大的层级
//新建一个变量记录最大深度， 深度优先遍历整棵树， 并记录每个节点的层级， 同时不断刷新最大深度这个变量
//遍历结束返回最大深度这个变量
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
var maxDepth = function(root) {
    let res = 0;
    const dfs = (n, l) => {
      if( !n ){ return; }
      //onsole.log(n.val);
      if(!n.left && !n.right ){
        res = Math.max(res, l);
      }
      dfs(n.left, l+1);
      dfs(n.right, l+1);
    };
    dfs(root, 1);
    return res;
};

//time: o(n)
//space: o(n) 均匀分布or olog(n)不均匀分布//函数调用函数的时候会形成函数调用堆栈， 嵌套次数为这个二叉树的深度