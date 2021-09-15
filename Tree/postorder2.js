const bt = require('./bt');
// 倒置顺序， 从左右根， 改为根右左，这样可以复用先序遍历, 改变访问顺序，  然后再根据stack后进
// 先出的特性， 再把子节点逆序输出

const postorder = (root) => {
  if(!root) { return; }
  const stack = [root;
  const outputstack = [];
  while(stack.length) {
    const n = stack.pop();
    outputstack.push(n);
    //stack is first in last out
    if(n.left) stack.push(n.left);
    if(n.right) stack.push(n.right);
  }
  while(outputstack.length) {
    const n = outputstack.pop();
    console.log(n.val);
  }
};

postorder(bt);