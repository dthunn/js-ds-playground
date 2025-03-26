const topKFrequent = function (nums, k) {
  const count = new Map()

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1)
  }

  const unique = Array.from(count.keys())

  const swap = function (a, b) {
    const temp = unique[a]
    unique[a] = unique[b]
    unique[b] = temp
  }

  const partition = function (left, right, pivotIndex) {
    const pivotFrequency = count.get(unique[pivotIndex])
    let pivot = left
    swap(pivotIndex, right)

    for (let i = left; i <= right; i++) {
      if (count.get(unique[i]) < pivotFrequency) {
        swap(pivot, i)
        pivot++
      }
    }

    swap(pivot, right)
    return pivot
  }

  const quickSelect = function (left, right, k) {
    if (left === right) return

    let pivotIndex = left + Math.floor(Math.random() * (right - left))
    pivotIndex = partition(left, right, pivotIndex)

    if (k === pivotIndex) return
    if (k < pivotIndex) {
      quickSelect(left, pivotIndex - 1, k)
    } else {
      quickSelect(pivotIndex + 1, right, k)
    }
  }

  const n = count.size
  quickSelect(0, n - 1, n - k)

  return unique.slice(n - k)
}
