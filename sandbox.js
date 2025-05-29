function kthSmallest(root, k) {
  const stack = []

  while (true) {
    // Traverse the left subtree
    while (root) {
      stack.push(root)
      root = root.left
    }

    // Process the node
    root = stack.pop()
    k--
    if (k === 0) {
      return root.val
    }

    // Traverse the right subtree
    root = root.right
  }
}
