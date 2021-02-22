/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, n) {
  if(n === ''){
      return 0
  }
  if(!h.includes(n)){
    return -1
  }

  for(var i = 0; i < h.length; i++){
    // console.log(h.slice(i, n.length + i))
    if(h.slice(i, n.length + i) === n){
        return i
    }
  }
};

console.log(strStr("hello","ll"))  //2