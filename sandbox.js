const solveSudoku = function (board) {
  const N = 9

  const rows = Array.from({ length: N }, () => new Map())
  const cols = Array.from({ length: N }, () => new Map())
  const boxes = Array.from({ length: N }, () => new Map())

  let isSolved = false

  const getBoxIndex = (row, col) =>
    Math.floor(row / 3) * 3 + Math.floor(col / 3)

  const canPlace = (digit, row, col) => {
    const d = String(digit)
    return !(
      rows[row].has(d) ||
      cols[col].has(d) ||
      boxes[getBoxIndex(row, col)].has(d)
    )
  }

  const placeDigit = (digit, row, col) => {
    const d = String(digit)
    rows[row].set(d, (rows[row].get(d) || 0) + 1)
    cols[col].set(d, (cols[col].get(d) || 0) + 1)
    boxes[getBoxIndex(row, col)].set(
      d,
      (boxes[getBoxIndex(row, col)].get(d) || 0) + 1
    )
    board[row][col] = d
  }

  const removeDigit = (digit, row, col) => {
    const d = String(digit)
    rows[row].delete(d)
    cols[col].delete(d)
    boxes[getBoxIndex(row, col)].delete(d)
    board[row][col] = '.'
  }

  const placeNext = (row, col) => {
    if (row === N - 1 && col === N - 1) {
      isSolved = true
    } else if (col === N - 1) {
      backtrack(row + 1, 0)
    } else {
      backtrack(row, col + 1)
    }
  }

  const backtrack = (row = 0, col = 0) => {
    if (board[row][col] === '.') {
      for (let d = 1; d <= 9; d++) {
        if (canPlace(d, row, col)) {
          placeDigit(d, row, col)
          placeNext(row, col)
          if (!isSolved) {
            removeDigit(d, row, col)
          }
        }
      }
    } else {
      placeNext(row, col)
    }
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] !== '.') {
        placeDigit(parseInt(board[row][col]), row, col)
      }
    }
  }

  backtrack()
}

var isValidSudoku = function (board) {
  const N = 9
  const rows = new Array(N).fill(0).map(() => new Set())
  const cols = new Array(N).fill(0).map(() => new Set())
  const boxes = new Array(N).fill(0).map(() => new Set())

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const val = board[r][c]
      if (val === '.') continue

      if (rows[r].has(val)) return false
      rows[r].add(val)

      if (cols[c].has(val)) return false
      cols[c].add(val)

      const idx = Math.floor(r / 3) * 3 + Math.floor(c / 3)
      if (boxes[idx].has(val)) return false
      boxes[idx].add(val)
    }
  }

  return true
}
