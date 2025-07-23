const shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0 || grid[grid.length - 1][grid[0].length - 1] !== 0)
    return -1

  const n = grid.length
  const visited = new Array(n).fill(0).map(() => new Array(n).fill(false))
  const queue = [[0, 0]]
  visited[0][0] = true
  let currentDistance = 1

  while (queue.length) {
    const nodesSize = queue.length

    for (let i = 0; i < nodesSize; i++) {
      const [row, col] = queue.shift()
      if (row === n - 1 && col === n - 1) return currentDistance

      for (const [dr, dc] of directions) {
        const newRow = row + dr
        const newCol = col + dc

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < n &&
          newCol < n &&
          grid[newRow][newCol] === 0 &&
          !visited[newRow][newCol]
        ) {
          visited[newRow][newCol] = true
          queue.push([newRow, newCol])
        }
      }
    }

    currentDistance++
  }

  return -1
}
