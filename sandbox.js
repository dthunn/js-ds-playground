var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1
  const queue = []
  const paths = []
  const path = [0]

  queue.push(path)

  while (queue.length) {
    const currentPath = queue.shift()
    const node = currentPath[currentPath.length - 1]

    for (const nextNode of graph[node]) {
      const tempPath = [...currentPath]
      tempPath.push(nextNode)

      if (nextNode === target) {
        paths.push(tempPath)
      } else {
        queue.push(tempPath)
      }
    }
  }

  return paths
}
