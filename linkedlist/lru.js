class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.dic = new Map()
    this.head = new Node(-1, -1)
    this.tail = new Node(-1, -1)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  add(node) {
    const pre = this.tail.prev
    pre.next = node
    node.prev = pre
    node.next = this.tail
    this.tail.prev = node
  }

  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  get(key) {
    if (!this.dic.has(key)) {
      return -1
    }

    const node = this.dic.get(key)
    this.remove(node)
    this.add(node)
    return node.value
  }

  put(key, value) {
    if (this.dic.has(key)) this.remove(this.dic.get(key))

    const node = new Node(key, value)
    this.add(node)
    this.dic.set(key, node)

    if (this.dic.size > this.capacity) {
      const nodeToDelete = this.head.next
      this.remove(nodeToDelete)
      this.dic.delete(nodeToDelete.key)
    }
  }
}
