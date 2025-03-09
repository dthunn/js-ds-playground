const dfsStack = function (graph) {
  const stack = [0]
  const seen = []
  const values = []

  while (stack.length) {
    const vertex = stack.pop()

    if (seen[vertex]) continue
    seen[vertex] = true
    values.push(vertex)

    const connections = graph[vertex]

    for (const connection of connections) {
      stack.push(connection)
    }
  }

  return values
}

var validPath = function (n, edges, source, destination) {
  const adjList = new Array(n).fill(0).map(() => [])

  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i]
    adjList[u].push(v)
    adjList[v].push(u)
  }

  const stack = []
  stack.push(source)
  const seen = new Array(n).fill(false)

  while (stack.length) {
    const node = stack.pop()

    if (node === destination) return true
    if (seen[node]) continue
    seen[node] = true

    for (const neighbor of adjList[node]) {
      stack.push(neighbor)
    }
  }

  return false
}
