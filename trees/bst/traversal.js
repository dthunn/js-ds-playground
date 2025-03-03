function preOrderTraverse(tree, array) {
  if (tree) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  }

  return array
}

function inOrderTraverse(tree, array) {
  if (tree) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }

  return array
}

function postOrderTraverse(tree, array) {
  if (tree) {
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }

  return array
}

function diameterOfBST(root) {
  let diameter = 0

  function height(node) {
    if (!node) return 0

    let leftHeight = height(node.left)
    let rightHeight = height(node.right)

    // Update the diameter (longest path between any two nodes)
    diameter = Math.max(diameter, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  height(root) // Start the height calculation
  return diameter
}

function findHeight(root) {
  if (!root) return -1 // Return -1 if considering edges, 0 if considering nodes

  let leftHeight = findHeight(root.left)
  let rightHeight = findHeight(root.right)

  return 1 + Math.max(leftHeight, rightHeight)
}
