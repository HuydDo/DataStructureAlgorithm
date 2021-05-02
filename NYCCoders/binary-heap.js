class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val)
    this.heapifyUp()
    return this.values
  }

  extractMax() {
    const max = this.values[0]
    this.swap(0, this.size() - 1)
    this.values.pop()
    this.heapifyDown()
    return max
  }

  //helper methods
  heapifyUp() {
    let childIndex = this.values.length - 1
    // let parentIndex = Math.floor((childIndex-1)/2)
    // let childVal = this.values[childIndex]
    // let parentVal = this.values[parentIndex]

    while ( /*childVal*/ this.values[childIndex] > /*parentVal*/ this.getParentVal(childIndex) ) {
      const parentIndex = this.getParentIndex(childIndex)
      this.swap(childIndex, parentIndex)
      // this.values[parentIndex] = childVal
      // this.values[childIndex] = parentVal
      childIndex = parentIndex
      
      // this is essentially reassigning new values for parentVal and childVal for our boolean expression in the while loop
      // parentIndex = Math.floor((childIndex-1)/2)
      // childVal = this.values[childIndex]
      // parentVal = this.values[parentIndex]
    }
  }

  heapifyDown() {
    let parentIndex = 0
    // let leftChildIndex = 2 * parentIndex + 1
    // let rightChildIndex = 2 * parentIndex + 2
    // let parentVal = this.values[parentIndex]
    // let leftChildVal = this.values[leftChildIndex]
    // let rightChildVal = this.values[rightChildIndex]

    while ( /*leftChildVal*/ this.getLeftChildVal(parentIndex) !== undefined ) {
      let maxChildIndex = /*leftChildIndex*/ this.getLeftChildIndex(parentIndex)
      let maxChildVal = /*leftChildVal*/ this.getLeftChildVal(parentIndex)

      if ( /*rightChildVal*/ this.getRightChildVal(parentIndex) !== undefined && /*rightChildVal*/ this.getRightChildVal(parentIndex) > maxChildVal) {
        maxChildIndex = /*rightChildIndex*/ this.getRightChildIndex(parentIndex)
        maxChildVal = /*rightChildVal*/ this.getRightChildVal(parentIndex)
      }

      if (/*parentVal*/ this.values[parentIndex] < maxChildVal) {
        this.swap(parentIndex, maxChildIndex)
        parentIndex = maxChildIndex
        // leftChildIndex = 2 * parentIndex + 1
        // rightChildIndex = 2 * parentIndex + 2
        // parentVal = this.values[parentIndex]
        // leftChildVal = this.values[leftChildIndex]
        // rightChildVal = this.values[rightChildIndex]
      } else {
        return
      }
    }
  }

  getParentIndex(i) {
    return Math.floor( (i-1) / 2)
  }

  getParentVal(i) {
    return this.values[this.getParentIndex(i)]
  }

  swap(i1, i2) {
    [ this.values[i1], this.values[i2] ] = [ this.values[i2], this.values[i1] ]
  }
  
  size() {
    return this.values.length
  }

  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  getRightChildIndex(i) {
    return 2 * i + 2
  }

  getLeftChildVal(i) {
    return this.values[this.getLeftChildIndex(i)]
  }

  getRightChildVal(i) {
    return this.values[this.getRightChildIndex(i)]
  }
}

const maxHeap = new MaxBinaryHeap()
console.log(maxHeap.insert(10))
console.log(maxHeap.insert(20))
console.log(maxHeap.insert(30))
console.log(maxHeap.insert(15))
console.log(maxHeap.insert(25))
console.log(maxHeap.insert(100))
console.log(maxHeap.extractMax(), maxHeap.values)
console.log(maxHeap.extractMax(), maxHeap.values)
console.log(maxHeap.extractMax(), maxHeap.values)
console.log(maxHeap.insert(102))
console.log(maxHeap.insert(103))
console.log(maxHeap.insert(105))
