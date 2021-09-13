 // Predict the output, then rename the function
    // based on the outcome.
    someFunc(node=this.root) {
      if (!node) {
          return;
      }
      this.someFunc(node.left);
      console.log(node.value);
      this.someFunc(node.right);
  }

      /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  contains(searchVal) {}

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {}

  // Extra for those hungry for more BST practice:
  /**
 * Calculates the range (max - min) from the given startNode.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} startNode The node to start from to calculate the range.
 * @returns {number|null} The range of this tree or a sub tree depending on      * if the start Node is the root or not.
 */
   range(startNode = this.root) {}

   let tree = new BST();
let testVals = [10, 5, 7, 20, 15, 15, 12, 13, 23, 2, 1];
/*
              10
             /   \
           5      20
          / \    /  \
         2   7  15   23
        /      /  \
       1      12   15
                \
                13
*/      
for (let val of testVals) {
    tree.insert(val);
}

tree.someFunc();