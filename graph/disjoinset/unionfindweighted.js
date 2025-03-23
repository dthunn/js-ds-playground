var calcEquation = function (equations, values, queries) {
  const uf = new UnionFind()

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i]
    const value = values[i]
    uf.union(a, b, value)
  }

  const result = []
  for (const [a, b] of queries) {
    result.push(uf.divide(a, b))
  }

  return result
}

class UnionFind {
  constructor() {
    this.parent = new Map()
    this.weight = new Map()
  }

  find(node) {
    if (!this.parent.has(node)) return null

    if (this.parent.get(node) !== node) {
      const originalParent = this.parent.get(node)
      const newParent = this.find(originalParent)
      this.weight.set(
        node,
        this.weight.get(node) * this.weight.get(originalParent)
      )
      this.parent.set(node, newParent)
    }

    return this.parent.get(node)
  }

  union(node1, node2, value) {
    if (!this.parent.has(node1)) {
      this.parent.set(node1, node1)
      this.weight.set(node1, 1.0)
    }
    if (!this.parent.has(node2)) {
      this.parent.set(node2, node2)
      this.weight.set(node2, 1.0)
    }

    const root1 = this.find(node1)
    const root2 = this.find(node2)

    if (root1 === root2) return

    this.parent.set(root1, root2)
    this.weight.set(
      root1,
      value * (this.weight.get(node2) / this.weight.get(node1))
    )
  }

  divide(node1, node2) {
    if (!this.parent.has(node1) || !this.parent.has(node2)) return -1.0

    const root1 = this.find(node1)
    const root2 = this.find(node2)

    if (root1 !== root2) return -1.0

    return this.weight.get(node1) / this.weight.get(node2)
  }
}
