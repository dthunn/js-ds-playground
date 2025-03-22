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

const traversal = function (vertex, graph, values, seen) {
  values.push(vertex)
  seen[vertex] = true
  const connections = graph[vertex]

  for (const connection of connections) {
    if (!seen[connection]) traversal(connection, graph, values, seen)
  }
}

const values = []
traversal(0, adjacencyList, values, {})

console.log(values)
