const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]

const numIslands = function (matrix) {
  if (!matrix.length) return 0
  let count = 0

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === '1') {
        count++
        const queue = [[row, col]]
        matrix[row][col] = '0'

        while (queue.length) {
          const [currentRow, currentCol] = queue.shift()

          for (const [dr, dc] of directions) {
            const nextRow = currentRow + dr
            const nextCol = currentCol + dc

            if (
              nextRow < 0 ||
              nextCol < 0 ||
              nextRow >= matrix.length ||
              nextCol >= matrix[0].length
            )
              continue

            if (matrix[nextRow][nextCol] === '1') {
              queue.push([nextRow, nextCol])
              matrix[nextRow][nextCol] = '0'
            }
          }
        }
      }
    }
  }

  return count
}
