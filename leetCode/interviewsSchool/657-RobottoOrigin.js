/**
 * @param {string} moves
 * @return {boolean}
 * 
 * Time Complexity: O(N)O(N), where NN is the length of moves. We iterate through the string.

*  Space Complexity: O(1)O(1). In Java, our character array is O(N).
 */
var judgeCircle = function(moves) {
  let count = 0, x = 0, y = 0
  for (let i=0; i < moves.length; i++){
    let move = moves.charAt(i)
    if (move == 'U') y++
    else if (move =='D') y--
    else if (move == 'L') x--
    else if (move == 'R') x++
  }
  return x==0 && y==0
};

// let move ="RRDD" //false
let move ="UD" //true

console.log(judgeCircle(move))