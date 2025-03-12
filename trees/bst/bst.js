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

// ---------------------------------------------------------

const insertRecursion = function (root, val) {
  if (root === null) return new TreeNode(val)

  if (val > root.val) {
    root.right = insertRecursion(root.right, val)
  } else {
    root.left = insertRecursion(root.left, val)
  }

  return root
}

const insertIterative = function (root, val) {
  let node = root

  while (node) {
    if (val > node.val) {
      if (!node.right) {
        node.right = new TreeNode(val)
        return root
      } else {
        node = node.right
      }
    } else {
      if (!node.left) {
        node.left = new TreeNode(val)
        return root
      } else {
        node = node.left
      }
    }
  }

  return new TreeNode(val)
}

// ---------------------------------------------------------

const deleteNode = function (root, key) {
  if (!root) return null

  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    if (!root.right && !root.left) return null
    if (!root.left) return root.right
    if (!root.right) return root.left
    root.val = getMinValue(root.right)
    root.right = deleteNode(root.right, root.val)
  }

  return root
}

const getMinValue = function (root) {
  if (!root.left) return root.val

  return root.left.getMinValue(root.left)
}
