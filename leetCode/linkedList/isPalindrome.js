/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next){
      return true
    }

    var slow = head
    var fast = head
    while (fast.next && fast.next.next){
      slow = slow.next
      fast = fast.next.next
    }

};