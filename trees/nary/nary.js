class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()

      arr.push(...node.children)
      fn(node)
    }
  }

  traverseDF(fn, node = this.root) {
    if (!node) return

    fn(node) // Process the node
    for (const child of node.children) {
      this.traverseDF(fn, child) // Recur for children
    }
  }
}
