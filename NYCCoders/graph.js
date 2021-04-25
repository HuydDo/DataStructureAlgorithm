class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
   this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(neighbor => neighbor !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(neighbor => neighbor !== vertex1)
  }
  removeVertex(vertex) {
    // console.log(vertex)
    this.adjacencyList[vertex].forEach(
      neighbor => 
      {
        // console.log(neighbor)
        this.removeEdge(vertex, neighbor)
      } )
    delete this.adjacencyList[vertex]
  }

}
let g = new Graph()
g.addVertex('jfk') /*Graph { adjacencyList: { jfk: [] } } */
g.addVertex('mco') /* Graph { adjacencyList: { jfk: [], mco: [] } } */

g.addEdge('jfk', 'mco')  /* Graph { adjacencyList: { jfk: [ 'mco' ], mco: [ 'jfk' ] } } */
 
g.removeVertex('mco') /*Graph { adjacencyList: { jfk: [] } } */
/*
g.addVertex('lga')
g.addVertex('nwk')
g.addVertex('sjc')
g.addVertex('ias')
g.addVertex('sea')
g.addVertex('mco')
g.addVertex('atl')
g.addVertex('yyz')
g.addEdge('jfk', 'mco')
g.addEdge('jfk', 'yyz')
g.addEdge('ias', 'sea')
g.addEdge('nwk', 'sea')
g.addEdge('atl', 'mco')
g.addEdge('sjc', 'sea')

g.removeVertex('mco') 
*/
console.log(g)
