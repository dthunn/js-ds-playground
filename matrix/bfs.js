const dummyMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
]

const bfs = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false))

  const values = []
  const queue = [[0, 0]]

  while (queue.length) {
    const currentPos = queue.shift()
    const row = currentPos[0]
    const col = currentPos[1]

    // if (
    //   row < 0 ||
    //   row >= matrix.length ||
    //   col < 0 ||
    //   col >= matrix[0].length ||
    //   seen[row][col]
    // ) {
    //   continue
    // }

    // seen[row][col] = true
    // values.push(matrix[row][col])

    // for (const dir of directions) {
    //   queue.push([row + dir[0], col + dir[1]])
    // }

    if (
      row >= 0 &&
      row < matrix.length &&
      col >= 0 &&
      col < matrix[0].length &&
      !seen[row][col]
    ) {
      seen[row][col] = true
      values.push(matrix[row][col])

      for (const dir of directions) {
        queue.push([row + dir[0], col + dir[1]])
      }
    }
  }

  return values
}

console.log(bfs(dummyMatrix))
