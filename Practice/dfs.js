function dfs(vertex, graph, visited = new Set()) {
  visited.add(vertex);
  console.log(vertex);

  for (let neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited)
    }
  }
}

const graph = {
  0: [1, 2], 
  1: [2], 
  2: [3], 
  3: [1, 2]
}

const graph2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 4],
  3: [0],
  4: [2]
}

// graph from the slide
const graph3 = {
  0: [1, 3, 6],
  1: [4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2]
}

dfs(0, graph3)