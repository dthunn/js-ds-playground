class UnionFind {
  constructor(size) {
    this.group = new Array(size).fill(0)
    this.rank = new Array(size).fill(0)
    this.size = size

    for (let i = 0; i < size; i++) {
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

    if (group1 === group2) return false

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

  connected(node1, node2) {
    return this.find(node1) === this.find(node2)
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

var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind(n)

  for (const [u, v] of edges) {
    uf.union(u, v)
  }

  return uf.find(source) === uf.find(destination)
}
