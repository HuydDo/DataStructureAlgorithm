//SOLUTION 1:
function checkSubSudoku(matrix) {
 
  let len = matrix.length

  //validate row
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    if (!isRowValid(row, len)) {
      
      // return false
      return "INVALID"
    }
  }

  //validate col
  let j = 0
  while (j < len) {
    let col = []
    for (let i = 0; i < matrix.length; i++) {
      col.push(matrix[i][j])
    }
    console.log('col: ' + col)
     if (!isRowValid(col, len)) {
     
      // return false
      return "INVALID"
    }
    j++
  }
 
  // return true
  return "VALID"
}


// SOLUTION 2:
function checkSubSudoku(matrix) {
  let len = matrix.length

  //validate row
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
      if (!isRowValid(row, len)) {
        return false
      }
  }

  //validate col
  let j = 0
  while (j < len) {
      if (!isColValid(matrix, j, len)) {
        return false
      }
    j++
  }

  return true
}


function isColValid(matrix, j, len) {
    let set = new Set()
    let array = new Array(len).fill(0)

    let i = 0
    while (i < len) {
      let currNum = matrix[i][j]
      if (set.has(currNum)) {
        return false
      } else {
        set.add(currNum)
        if (array[currNum-1] !== 0) {
          return false
        } else {
          array[currNum-1] = currNum
        }
      }
    i++
    }
  return true
}

function isRowValid(row, len) {
    let array = new Array(len).fill(0)
    let set = new Set()
    console.log(array)


    for (let i = 0; i < row.length; i++) {
      let num = row[i]
      if (set.has(num)) {
        return false
      } else {
        set.add(num)
        if (array[num-1] !== 0) {
          return false
        } else {
          array[num-1] = num
        }
      }
    }

  return true
}

let output = checkSubSudoku([
  [1,2,3],
  [2,3,1],
  [2,1,2]
])

console.log(output)


let output2 = checkSubSudoku([
  [1,2,3],
  [2,3,1],
  [3,1,2]
])

console.log(output2)