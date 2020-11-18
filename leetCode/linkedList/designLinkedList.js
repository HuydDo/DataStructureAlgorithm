var MyLinkedList = function() {
  this.dummy = new ListNode(0)
  this.tail = this.dummy

};

var ListNode = function(val) {
  this.val = val
  this.next = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index<0){
    return -1
  }
  var cur = this.dummy.next
  while(cur && index>0){
    cur = cur.next
    index--
  }
  if (!cur){
    return -1
  }
  return cur.val
}

MyLinkedList.prototype.createNode = function(val) {
  var temp = new ListNode(val)
  return temp
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  var temp = this.createNode(val)
  temp.next = this.dummy.next
  this.dummy.next = temp
  if (this.tail == this.dummy) {
      this.tail = temp
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  var t = this.createNode(val)
  this.tail.next = t
  this.tail = t
};

MyLinkedList.prototype.printList = function () {
  var current = this
  var output = ''
  while (current) {
    output += current.val + " -> "
    current = current.next
  }
  console.log(output)
};

var obj = new MyLinkedList()

obj.addAtHead(1)
obj.printList()
console.log(obj.get(0))

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]


// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

var obj = new MyLinkedList()