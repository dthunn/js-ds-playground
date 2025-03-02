let minCostConnectPoints = function (points) {
  const n = points.length
  const heap = new Heap((a, b) => a[0] < b[0]) // Min-heap
  const inMST = new Array(n).fill(false)
  const mstEdges = [] // Stores MST edges

  heap.push([0, 0, -1]) // [weight, current node, parent node]
  let mstCost = 0
  let edgesUsed = 0

  while (edgesUsed < n) {
    let [weight, currNode, parent] = heap.peek()
    heap.pop()

    if (inMST[currNode]) {
      continue
    }

    inMST[currNode] = true
    mstCost += weight
    edgesUsed++

    if (parent !== -1) {
      mstEdges.push([parent, currNode, weight])
    }

    for (let nextNode = 0; nextNode < n; nextNode++) {
      if (!inMST[nextNode]) {
        let nextWeight =
          Math.abs(points[currNode][0] - points[nextNode][0]) +
          Math.abs(points[currNode][1] - points[nextNode][1])

        heap.push([nextWeight, nextNode, currNode])
      }
    }
  }

  return { mstCost, mstEdges }
}

// -----------------------------------------------------------------

function primsAlgorithm(edges) {
  const heap = new Heap((a, b) => a[2] < b[2]) // Min heap based on edge weight
  const initialEdges = edges[0].map((edge) => [0, edge[0], edge[1]])
  heap.buildHeap(initialEdges)

  const mst = edges.map(() => [])
  const visited = new Set()
  visited.add(0)

  while (!heap.isEmpty()) {
    const [vertex, discoveredVertex, distance] = heap.pop()

    if (!visited.has(discoveredVertex)) {
      visited.add(discoveredVertex)
      mst[vertex].push([discoveredVertex, distance])
      mst[discoveredVertex].push([vertex, distance])

      for (const [neighbor, neighborDistance] of edges[discoveredVertex]) {
        if (!visited.has(neighbor)) {
          heap.push([discoveredVertex, neighbor, neighborDistance])
        }
      }
    }
  }

  return mst
}

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
