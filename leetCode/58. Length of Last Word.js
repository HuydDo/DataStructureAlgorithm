/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastWordLen = 0
  let currWordLen = 0
  for(let i = 0; i < s.length; i++){
    if (s.charAt(i) == ' ')
      currWordLen = 0
    else{
      currWordLen++
      lastWordLen = currWordLen
    }
  }
  return lastWordLen 
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord(" "))