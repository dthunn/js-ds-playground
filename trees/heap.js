class Heap {
  constructor(comparator = (a, b) => a < b) {
    this.heap = []
    this.comparator = comparator
  }

  size() {
    return this.heap.length
  }

  peek() {
    return this.heap[0]
  }

  isEmpty() {
    return this.size() === 0
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2)
  }

  leftChild(idx) {
    return idx * 2 + 1
  }

  rightChild(idx) {
    return idx * 2 + 2
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  compare(i, j) {
    return this.comparator(this.heap[i], this.heap[j])
  }

  push(value) {
    this.heap.push(value)
    this.siftUp()
  }

  siftUp() {
    let nodeIdx = this.size() - 1

    while (0 < nodeIdx && this.compare(nodeIdx, this.parent(nodeIdx))) {
      this.swap(nodeIdx, this.parent(nodeIdx))
      nodeIdx = this.parent(nodeIdx)
    }
  }

  pop() {
    if (this.size() > 1) {
      this.swap(0, this.size() - 1)
    }

    const value = this.heap.pop()
    this.siftDown()

    return value
  }

  siftDown(idx = 0) {
    let maxIdx = idx

    while (true) {
      let leftIdx = this.leftChild(maxIdx)
      let rightIdx = this.rightChild(maxIdx)

      if (leftIdx < this.size() && this.compare(leftIdx, maxIdx)) {
        maxIdx = leftIdx
      }

      if (rightIdx < this.size() && this.compare(rightIdx, maxIdx)) {
        maxIdx = rightIdx
      }

      if (maxIdx !== idx) {
        this.swap(idx, maxIdx)
        idx = maxIdx
      } else {
        break
      }
    }
  }

  buildHeap(array) {
    this.heap = array
    const parentIdx = this.parent(this.size() - 1)

    for (let i = parentIdx; i >= 0; i--) {
      this.siftDown(i)
    }
  }
}

const heap = new Heap()
heap.buildHeap([15, 12, 50, 7, 40, 22])
// heap.push(15)
// heap.push(12)
// heap.push(50)
// heap.push(7)
// heap.push(40)
// heap.push(22)

while (!heap.isEmpty()) {
  console.log(heap.pop())
}
