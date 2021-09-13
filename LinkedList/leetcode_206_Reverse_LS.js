/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1){
      const temp = p1.next;
      p1.next = p2;
      p2 = p1;
      p1 = temp;
    }
    return p2;
};