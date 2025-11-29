/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
     let curr = head;
  let mySet = new Set();
  while (curr !== null){
    if (mySet.has(curr)){
      return true;
    }
     mySet.add(curr)
    curr = curr.next

  } return false;
    
};