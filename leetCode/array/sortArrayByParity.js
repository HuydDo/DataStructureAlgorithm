/**
 * @param {number[]} A
 * @return {number[]}
 * Time Complexity: O(N), where NN is the length of A.

Space Complexity: O(N), the space used by the answer
 */
var sortArrayByParity = function(A) {
    let ans = []
    let t = 0
    for(let i=0; i<A.length; i++){
      if (A[i] % 2 == 0){
        ans[t++] = A[i]
      }
    }
      for(let i=0; i<A.length; i++){
      if (A[i] % 2 == 1){
        ans[t++] = A[i]
      } 
    }
    return ans
};

let A = [3,1,2,4] //Output: [2,4,3,1]

console.log(sortArrayByParity(A))