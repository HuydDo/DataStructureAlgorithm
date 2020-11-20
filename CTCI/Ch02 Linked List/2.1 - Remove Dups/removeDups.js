/* CLASS */
var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

/*FUNCTION*/
var checkDups = function(head, node){
  var currNode = head;
  while (currNode !== node){
    if(currNode.value === node.value){
      return true;
    }
    currNode = currNode.next;
  }
  return false;
};

var printLinkedList = function(head){
  var node = head;
  console.log('start of linked list');
  while(node !== null){
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list')
}

var removeDups = function(head){
  var node = head;
  while(node !== null){
    if (node.next !== null && checkDups(head, node.next)){
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;;
}
/* TEST */
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);