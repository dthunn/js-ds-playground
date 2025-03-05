class UnionFind {
  constructor(size) {
    this.group = new Array(size).fill(0)
    this.rank = new Array(size).fill(0)
    this.count = size

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
      this.rank[group2]++
    }

    this.count--

    return true
  }

  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}
