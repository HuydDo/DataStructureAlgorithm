function rotateMatrix(matrix){
  let arr = []
  //create nested empty array of matrix.length x matrix.length
  for(let i = 0; i < matrix.length;  i++){
    // arr.push(new Array(matrix[0].length).fill(0))
    arr.push(new Array(matrix[0].length))
  }
  console.log(arr)
  for(let j = 0, k = matrix.length - 1; j < matrix[0].length; j++, k--){
    for(let l = 0; l < matrix.length; l++){
      arr[l][j] = matrix[k][l]
      // console.log(arr)
    }
  }
  // console.log(arr)
  return arr

}
/* TEST */
let testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  console.log(rotateMatrix(testMatrix))
