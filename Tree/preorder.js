const bt = require('./bt');
//εεΊιε
const preorder = (root) => {
  if(!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

preorder(bt);