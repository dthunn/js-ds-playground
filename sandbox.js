var maxDepth = function (root) {
  if (!root) return 0

  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)

  return 1 + Math.max(leftHeight, rightHeight)
}

var diameterOfBinaryTree = function (root) {
  let diameter = 0

  const helper = function (node) {
    if (!node) return 0

    const leftHeight = helper(node.left)
    const rightHeight = helper(node.right)

    diameter = Math.max(diameter, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  helper(root)
  return diameter
}
