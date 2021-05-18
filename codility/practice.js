/* 
Find the lowest positive integer NOT in an Array of integers
[1,3,6,4,1,2] -> 5
[1,2,3]       -> 4
[-1,-3]       -> 1
*/

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  
  let set = new Set(A);
  // console.log(set);
  let len = A.length + 1;
  for(let i = 1; i <= A.length+1; i++){
      if(!set.has(i) && i<len){
          len = i;
      }
  }
  return len;
}

let A = [1, 3, 6, 4, 1, 2]
console.log(solution(A));
