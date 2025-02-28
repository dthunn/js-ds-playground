class UnionFind {
  constructor(size) {
    this.group = new Uint32Array(size).fill(0)
    this.rank = new Uint32Array(size).fill(0)
    this.count = size

    for (let i = 0; i < size; ++i) {
      this.group[i] = i
    }
  }

  find(node) {
    if (this.group[node] !== node) {
      this.group[node] = this.find(this.group[node])
    }
    return this.group[node]
  }

  union(node1, node2) {
    const group1 = this.find(node1)
    const group2 = this.find(node2)

    if (group1 === group2) {
      return false
    }

    if (this.rank[group1] > this.rank[group2]) {
      this.group[group2] = group1
    } else if (this.rank[group1] < this.rank[group2]) {
      this.group[group1] = group2
    } else {
      this.group[group1] = group2
      this.rank[group2] += 1
    }

    this.size--

    return true
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}

const uf = new UnionFind(10)
uf.union(1, 2)
uf.union(2, 5)
uf.union(5, 6)
uf.union(6, 7)
uf.union(3, 8)
uf.union(8, 9)

console.log(uf.group)

console.log(uf.connected(1, 5))
console.log(uf.connected(5, 7))
console.log(uf.connected(4, 9))

uf.union(9, 4)
console.log(uf.connected(4, 9))

// ------------------------------------------------------------------

let minCostConnectPoints = function (points) {
  let n = points.length
  let allEdges = []

  for (let currNode = 0; currNode < n; currNode++) {
    for (let nextNode = currNode + 1; nextNode < n; nextNode++) {
      let weight =
        Math.abs(points[currNode][0] - points[nextNode][0]) +
        Math.abs(points[currNode][1] - points[nextNode][1])

      allEdges.push([weight, currNode, nextNode])
    }
  }

  allEdges.sort((a, b) => a[0] - b[0])
  let uf = new UnionFind(n)
  let mstCost = 0
  let edgesUsed = 0
  const mstEdges = []

  for (let i = 0; i < allEdges.length && edgesUsed < n; i++) {
    const [weight, node1, node2] = allEdges[i]

    if (uf.union(node1, node2)) {
      mstCost += weight
      edgesUsed++
      mstEdges.push([node1, node2, weight])
    }
  }

  return mstCost
}

// ------------------------------------------------------------------

function minCostConnectPoints2(edges) {
  const edgeList = []

  for (let sourceIndex = 0; sourceIndex < edges.length; sourceIndex++) {
    const vertex = edges[sourceIndex]

    for (const edge of vertex) {
      if (edge[0] > sourceIndex) {
        edgeList.push([sourceIndex, edge[0], edge[1]])
      }
    }
  }

  let uf = new UnionFind(edges.length)
  const mst = edges.map(() => [])
  let edgesUsed = 0
  edgeList.sort((a, b) => a[2] - b[2])

  for (const edge of edgeList) {
    const vertex1Root = uf.find(edge[0])
    const vertex2Root = uf.find(edge[1])

    if (vertex1Root !== vertex2Root) {
      mst[edge[0]].push([edge[1], edge[2]])
      mst[edge[1]].push([edge[0], edge[2]])
      uf.union(vertex1Root, vertex2Root)
      edgesUsed++

      if (edgesUsed === edges.length) break
    }
  }

  return mst
}

// ------------------------------------------------------------------

var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind(n)

  for (const [u, v] of edges) {
    uf.union(u, v)
  }

  return uf.find(source) === uf.find(destination)
}
