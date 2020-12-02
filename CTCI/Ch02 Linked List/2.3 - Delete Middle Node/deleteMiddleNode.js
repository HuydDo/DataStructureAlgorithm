var LinkedList = function(value){
  this.value = value;
  this.next = null;
}

var deleleMidNode = function(midNode){
  var node = midNode;
  while (node !== null && node.next !== null) {
    node.value = node.next.value;
    if (node.next.next === null) {
      node.next = null;
    } 
    node = node.next;
  }

  // a -> b -> c -> d -> e -> f, input c
// a -> b -> *d -> d -> e -> f
// a -> b -> d -> *e -> e -> f
// a -> b -> d -> e -> *f -> f
// a -> b -> d -> e -> f -> *null
}