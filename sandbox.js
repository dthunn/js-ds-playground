var orangesRotting = function (matrix) {
  if (matrix.length === 0) return 0

  const queue = []
  let freshOranges = 0

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col])
      }

      if (matrix[row][col] === FRESH) {
        freshOranges++
      }
    }
  }

  let minutes = 0
  let currentQueueSize = queue.length

  while (queue.length) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length
      minutes++
    }

    const currentOrange = queue.shift()
    currentQueueSize--
    const [row, col] = currentOrange

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i]
      const nextRow = row + currentDir[0]
      const nextCol = col + currentDir[1]

      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      )
        continue

      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = ROTTEN
        freshOranges--
        queue.push([nextRow, nextCol])
      }
    }
  }

  if (freshOranges !== 0) {
    return -1
  }

  return minutes
}
