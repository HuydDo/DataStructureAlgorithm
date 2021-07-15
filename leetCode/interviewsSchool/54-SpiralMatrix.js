/**
 * @param {number[][]} matrix
 * @return {number[]}
 * O(n*m) visit each tile once
 */
 var spiralOrder = function(matrix) {
    
  let arr = []
  
  while(matrix.length >0){
    // console.log(matrix.length)
    //find top and bottom of arrays
    let t = matrix.shift()
    let b = (matrix.pop() || []).reverse()
  
    //find left and right of arrays
    let l = []
    let r = []
    for(let i=0; i<matrix.length; i++){
      if(matrix[i].length > 0){
        r.push(matrix[i].pop())
      }
      if(matrix[i].length > 0){
        l.unshift(matrix[i].shift())
      }
    }

    arr.push(...t,...r,...b,...l)
  }
  return arr
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))  // [1,2,3,6,9,8,7,4,5]