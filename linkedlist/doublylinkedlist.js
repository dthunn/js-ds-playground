class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class MyLinkedList {
  constructor() {
    this.size = 0
    this.head = new ListNode(0) // sentinel head
    this.tail = new ListNode(0) // sentinel tail
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1

    let curr = null
    if (index + 1 < this.size - index) {
      curr = this.head
      for (let i = 0; i < index + 1; i++) {
        curr = curr.next
      }
    } else {
      curr = this.tail
      for (let i = 0; i < this.size - index; i++) {
        curr = curr.prev
      }
    }

    return curr.val
  }

  addAtHead(val) {
    const pred = this.head
    const succ = this.head.next

    this.size++
    const newNode = new ListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred.next = newNode
    succ.prev = newNode
  }

  addAtTail(val) {
    const succ = this.tail
    const pred = this.tail.prev

    this.size++
    const newNode = new ListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred.next = newNode
    succ.prev = newNode
  }

  addAtIndex(index, val) {
    if (index > this.size) return
    if (index < 0) index = 0

    let pred, succ
    if (index < this.size - index) {
      pred = this.head
      for (let i = 0; i < index; i++) pred = pred.next
      succ = pred.next
    } else {
      succ = this.tail
      for (let i = 0; i < this.size - index; i++) succ = succ.prev
      pred = succ.prev
    }

    this.size++
    const newNode = new ListNode(val)
    newNode.prev = pred
    newNode.next = succ
    pred.next = newNode
    succ.prev = newNode
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return

    let pred, succ
    if (index < this.size - index) {
      pred = this.head
      for (let i = 0; i < index; i++) pred = pred.next
      succ = pred.next.next
    } else {
      succ = this.tail
      for (let i = 0; i < this.size - index - 1; i++) succ = succ.prev
      pred = succ.prev.prev
    }

    this.size--
    pred.next = succ
    succ.prev = pred
  }
}
