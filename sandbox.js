const dummyMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]

const bfs = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false))

  const values = []
  const queue = [[0, 0]]

  while (queue.length) {
    const [row, col] = queue.shift()

    if (
      row >= 0 &&
      col >= 0 &&
      row < matrix.length &&
      col < matrix[0].length &&
      !seen[row][col]
    ) {
      seen[row][col] = true
      values.push(matrix[row][col])

      for (const [dr, dc] of directions) {
        queue.push([row + dr, col + dc])
      }
    }
  }

  return values
}

console.log(bfs(dummyMatrix))
