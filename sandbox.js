var orangesRotting = function (matrix) {
  if (!matrix.length) return 0

  const queue = []
  let freshOranges = 0

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) queue.push([row, col])
      if (matrix[row][col] === FRESH) freshOranges++
    }
  }

  let minutes = 0
  let currentQueueSize = queue.length

  while (queue.length) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length
      minutes++
    }

    const [row, col] = queue.shift()
    currentQueueSize--

    for (const [dr, dc] of directions) {
      const nextRow = row + dr
      const nextCol = col + dc

      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= matrix.length ||
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

  if (freshOranges !== 0) return -1
  return minutes
}
