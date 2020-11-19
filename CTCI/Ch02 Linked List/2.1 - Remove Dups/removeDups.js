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