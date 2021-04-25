function bfs(start, graph) {
  const visited = new Set();
  visited.add(start);
  // using an array as a queue since 
  // JS doesn't have a built-in queue
  const queue = [];
  // push === enqueue
  queue.push(start);

  while (queue.length !== 0) {
    // shift === dequeue
    const vertex = queue.shift();
    console.log(vertex);
    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
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

bfs(0, graph3);


// BFS using a real queue

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this.size;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;
        return temp.value;
    }

    size() {
      return this.size;
    }
}

function bfsWithQueue(start, graph) {
  const visited = new Set();
  visited.add(start);
  const queue = new Queue()
  queue.enqueue(start);

  while (queue.size !== 0) {
    const vertex = queue.dequeue();
    console.log(vertex);
    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}
bfsWithQueue(0, graph3)