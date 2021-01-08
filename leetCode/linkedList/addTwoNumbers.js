/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* Method #1 */
var addTwoNumbers = function(l1, l2) {
  cur1 = l1;
  cur2 = l2;
  dummy = new ListNode(0);
  cur = dummy;
  carry = 0;
  while (cur1 != undefined || cur2 != undefined) {
      if (cur1 != undefined) {
          carry += cur1.val
          cur1 = cur1.next
      }
      
      if (cur2 != undefined) {
          carry += cur2.val
          cur2 = cur2.next
      }
      
      temp = new ListNode(carry % 10)
      cur.next = temp;
      cur = cur.next;
      carry = Math.floor(carry / 10)
  }
  if (carry != 0) {
      temp = new ListNode(carry);
      cur.next = temp
      cur = cur.next
  }
  return dummy.next
};

/*Method #2 */
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;

  while (cur1 !== null || cur2 !== null){
    let x = (cur1 !== null) ? cur1.val : 0;
    let y = (cur2 !== null) ? cur2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
  
    if(cur1 !== null){
      cur1 = cur1.next;
    }

    if(cur2 !== null){
      cur2 = cur2.next;
    }
  }

  if (carry > 0){
    cur.next = new ListNode(1);
  }

  return dummy.next;
};