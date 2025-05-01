class Node {
  constructor(value) {
    this.value = value
    this.nextNode = null
  }
}

class MyCircularQueue {
  constructor(k) {
    this.capacity = k
    this.count = 0
    this.head = null
    this.tail = null
  }

  /** Insert an element into the circular queue. Return true if the operation is successful. */
  enQueue(value) {
    if (this.count === this.capacity) return false

    const newNode = new Node(value)
    if (this.count === 0) {
      this.head = this.tail = newNode
    } else {
      this.tail.nextNode = newNode
      this.tail = newNode
    }

    this.count += 1
    return true
  }

  /** Delete an element from the circular queue. Return true if the operation is successful. */
  deQueue() {
    if (this.count === 0) return false

    this.head = this.head.nextNode
    this.count -= 1
    return true
  }

  /** Get the front item from the queue. */
  Front() {
    if (this.count === 0) return -1
    return this.head.value
  }

  /** Get the last item from the queue. */
  Rear() {
    if (this.count === 0) return -1
    return this.tail.value
  }

  /** Checks whether the circular queue is empty or not. */
  isEmpty() {
    return this.count === 0
  }

  /** Checks whether the circular queue is full or not. */
  isFull() {
    return this.count === this.capacity
  }
}

class MyCircularQueue2 {
  constructor(k) {
    this.data = new Array(k)
    this.head = -1
    this.tail = -1
    this.size = k
  }

  /** Insert an element into the circular queue. Return true if the operation is successful. */
  enQueue(value) {
    if (this.isFull()) {
      return false
    }
    if (this.isEmpty()) {
      this.head = 0
    }
    this.tail = (this.tail + 1) % this.size
    this.data[this.tail] = value
    return true
  }

  /** Delete an element from the circular queue. Return true if the operation is successful. */
  deQueue() {
    if (this.isEmpty()) {
      return false
    }
    if (this.head === this.tail) {
      this.head = -1
      this.tail = -1
    } else {
      this.head = (this.head + 1) % this.size
    }
    return true
  }

  /** Get the front item from the queue. */
  Front() {
    if (this.isEmpty()) {
      return -1
    }
    return this.data[this.head]
  }

  /** Get the last item from the queue. */
  Rear() {
    if (this.isEmpty()) {
      return -1
    }
    return this.data[this.tail]
  }

  /** Checks whether the circular queue is empty or not. */
  isEmpty() {
    return this.head === -1
  }

  /** Checks whether the circular queue is full or not. */
  isFull() {
    return (this.tail + 1) % this.size === this.head
  }
}
