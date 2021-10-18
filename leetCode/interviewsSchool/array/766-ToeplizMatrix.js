/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
  var isToeplitzMatrix = function(matrix) {
    for (let r = 0; r < matrix.length; ++r)
    {  
       for (let c = 0; c < matrix[0].length; ++c)
       {
         console.log('r: ' + r + ' c: ' + c);
         if (r > 0 && c > 0 && matrix[r-1][c-1] != matrix[r][c]){
          console.log(matrix[r-1][c-1])
          console.log(matrix[r][c])
          return false;
         }
       }
    }
    return true;
};

let matrix1 = [[1,2],[2,2]];
let matrix2 = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
console.log(isToeplitzMatrix(matrix1)); //false
console.log(isToeplitzMatrix(matrix2));  //true