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
  const seen = []
  const values = []

  while (queue.length) {
    const vertex = queue.shift()
    if (seen[vertex]) continue

    values.push(vertex)
    seen[vertex] = true

    for (const connection of graph[vertex]) {
      queue.push(connection)
    }
  }

  return values
}

const values = bfs(adjacencyList)
console.log(values)
