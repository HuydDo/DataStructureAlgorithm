/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let arr = []
  for(let i=0; i <A.length; i++){
    arr [i]= A[i]*A[i]
  }
  arr.sort(function(a,b){
    return a-b;
  })
  return arr
    
};


let A = [-7,-3,2,3,11]
console.log(sortedSquares(A))