var linkedList = function(value){
  this.value = value;
  this.next = null
}

var findKthToLast = function(k,head){
  //do recursively
  if (head === null || k<1){
    return;
  } else if(k===1){
    console.log(head.value);
    findKthToLast(k, head.next);
  } else {
    findKthToLast(k-1, head.next);
  }
}

