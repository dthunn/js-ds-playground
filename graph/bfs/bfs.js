const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
]

const bfs = function (graph) {
  const queue = [0]
  const seen = new Array(graph.length)
  const values = []

  while (queue.length) {
    const vertex = queue.shift()
    if (seen[vertex]) continue

    values.push(vertex)
    seen[vertex] = true

    const connections = graph[vertex]

    for (const connection of connections) {
      queue.push(connection)
    }
  }

  return values
}

const values = bfs(adjacencyList)
console.log(values)

// ---------------------------------------------------

var validPath = function (n, edges, source, destination) {
  const adjList = new Array(n).fill(0).map(() => [])

  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i]
    adjList[u].push(v)
    adjList[v].push(u)
  }

  const queue = []
  queue.push(source)
  const seen = new Array(n).fill(false)

  while (queue.length) {
    const node = queue.shift()

    if (node === destination) return true
    if (seen[node]) continue
    seen[node] = true

    for (const neighbor of adjList[node]) {
      queue.push(neighbor)
    }
  }

  return false
}

// ---------------------------------------------------

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
