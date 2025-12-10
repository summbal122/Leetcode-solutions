/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let setB = new Set();
    let listA = headA;
    let listB = headB;

    while (listB !== null){
        setB.add(listB)
        listB = listB.next
    }
    while (listA !== null){
        if(setB.has(listA)){
            return listA
        }
        listA = listA.next
    }
    return null;
    
};