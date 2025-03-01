class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value >= this.value && this.right) {
      this.right.insert(value)
    } else if (value >= this.value) {
      this.right = new BST(value)
    } else if (value < this.value && this.left) {
      this.left.insert(value)
    } else if (value < this.value) {
      this.left = new BST(value)
    }
  }

  contains(value) {
    if (value === this.value) {
      return true
    }

    if (value > this.value && this.right) {
      return this.right.contains(value)
    } else if (value < this.value && this.left) {
      return this.left.contains(value)
    }

    return false
  }

  remove(value, parent = null) {
    if (value < this.value && this.left) {
      this.left.remove(value, this)
    } else if (value > this.value && this.right) {
      this.right.remove(value, this)
    } else {
      if (this.left && this.right) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        }
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right
      }
    }
  }

  getMinValue() {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}
