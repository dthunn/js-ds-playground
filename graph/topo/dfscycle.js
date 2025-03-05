function topologicalSort(nodes) {
  seen = new Map()
  output = []

  for (let node of nodes) {
    if (!seen.has(node)) {
      if (!dfs(node)) {
        console.log('Cycle detected! Topological sort not possible.')
        return [] // Return an empty array as failure
      }
    }
  }

  return output.reverse() // Reverse to get the correct order
}

function dfs(c) {
  if (seen.has(c)) {
    return seen.get(c) // If this node was grey (false), a cycle was detected.
  }
  seen.set(c, false) // Mark as visiting (grey)
  for (let next of reverseAdjList.get(c)) {
    if (!dfs(next)) return false // Cycle detected
  }
  seen.set(c, true) // Mark as fully processed (black)
  output.push(c)
  return true
}
