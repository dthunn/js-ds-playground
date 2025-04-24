var bstFromPreorder = function (preorder) {
  let idx = 0

  function helper(lower, upper) {
    if (idx === preorder.length) return null

    const val = preorder[idx]
    if (val < lower || val > upper) return null
    idx++

    const root = new TreeNode(val)
    root.left = helper(lower, val)
    root.right = helper(val, upper)

    return root
  }

  return helper(-Infinity, Infinity)
}
