class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  setHead(node) {
    if (!this.head) {
      this.head = node
      this.tail = node

      return
    }

    this.insertBefore(this.head, node)
  }

  setTail(node) {
    if (!this.tail) {
      this.setHead(node)
      return
    }

    this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert) {
    if (this.head === nodeToInsert && this.tail === nodeToInsert) return
    this.remove(nodeToInsert)

    nodeToInsert.prev = node.prev
    nodeToInsert.next = node

    if (node.prev === null) {
      this.head = nodeToInsert
    } else {
      node.prev.next = nodeToInsert
    }

    node.prev = nodeToInsert
  }

  insertAfter(node, nodeToInsert) {
    if (this.head === nodeToInsert && this.tail === nodeToInsert) return
    this.remove(nodeToInsert)

    nodeToInsert.next = node.next
    nodeToInsert.prev = node

    if (!node.next) {
      this.tail = nodeToInsert
    } else {
      node.next.prev = nodeToInsert
    }

    node.next = nodeToInsert
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 0) {
      this.setHead(nodeToInsert)
      return
    }

    let node = this.head
    let counter = 1

    while (node && counter !== position) {
      node = node.next
      counter++
    }

    if (node) {
      this.insertBefore(node, nodeToInsert)
    } else {
      this.setTail(nodeToInsert)
    }
  }

  removeNodesWithValue(value) {
    let node = this.head

    while (node) {
      const currentNode = node
      node = node.next

      if (currentNode.value === value) this.remove(currentNode)
    }
  }

  remove(node) {
    if (this.head === node) this.head = this.head.next
    if (this.tail === node) this.tail = this.tail.prev

    this.removeNodeBindings(node)
  }

  containsNodeWithValue(value) {
    let node = this.head

    while (node && node.value !== value) node = node.next

    return node !== null
  }

  removeNodeBindings(node) {
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev

    node.next = null
    node.prev = null
  }
}
