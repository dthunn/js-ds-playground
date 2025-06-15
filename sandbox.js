var maxDepth = function (root) {
  if (!root) return 0

  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)

  return 1 + Math.max(leftHeight, rightHeight)
}
