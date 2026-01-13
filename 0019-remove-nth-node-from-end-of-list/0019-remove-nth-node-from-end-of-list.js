/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel
  let second = sentinel
  for (let i = 0; i< n; i++){
    first = first.next
  }
  while ( first.next){
    second = second.next
    first = first.next
  }
  second.next = second.next.next
  return sentinel.next

  
}