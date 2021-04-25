function dfs(r, c, matrix, target, visited = new Set()) {
  // base cases 1, 2
  if (isInvalidPos(r, c, matrix) || visited.has(matrix[r][c])) {
    return false;
  }

  const curNum = matrix[r][c];
  visited.add(curNum);
  console.log(curNum);

  // base case 3
  if (matrix[r][c] === target) {
    return true;
  }

  // recursive calls
  const hasTarget = dfs(r - 1, c, matrix, target, visited) 
                    || dfs(r + 1, c, matrix, target, visited) 
                    || dfs(r, c - 1, matrix, target, visited) 
                    || dfs(r, c + 1, matrix, target, visited)
  
  return hasTarget;
}

function isInvalidPos(r, c, matrix) {
    return (
        r < 0
        || r >= matrix.length 
        || c < 0 
        || c >= matrix[0].length
    )
}

const arr = [
	    [1, 2, 3],
	    [4, 5, 6],
	    [7, 8, 9],
	  ];
const target = 5;
const startRow = 0;
const startCol = 1;

dfs(startRow, startCol, arr, target)