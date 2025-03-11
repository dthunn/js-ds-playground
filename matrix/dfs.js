const dummyMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]

const directions = [
  [-1, 0], // up
  [0, 1], //right
  [1, 0], //down
  [0, -1], // left
]

const traversal = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false))

  const values = []
  dfs(matrix, 0, 0, seen, values)

  return values
}

const dfs = function (matrix, row, col, seen, values) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return
  }

  seen[row][col] = true
  values.push(matrix[row][col])

  for (const direction of directions) {
    dfs(matrix, row + direction[0], col + direction[1], seen, values)
  }
}

console.log(traversal(dummyMatrix))
