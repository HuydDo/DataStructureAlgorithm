/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
for(let i=0; i <A.length; i++){
  A[i] *= A[i]
}
A.sort(function(a,b){
return a-b;
})
return A

};

let A = [-4,-1,0,3,10] //Output: [0,1,9,16,100]
console.log(sortedSquares(A))