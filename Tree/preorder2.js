const bt = require('./bt');

const preorder = (root) => {
  if(!root) { return; }
  const stack = [root];
  while(stack.length) {
    const n = stack.pop();
    console.log(n.val);
    //stack is first in last out
    if(n.right) stack.push(n.right);
    if(n.left) stack.push(n.left);
  }
};

preorder(bt);