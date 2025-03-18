function topKFrequent(nums, k) {
  let count = new Map()
  let unique = []

  // Build the frequency map: number -> frequency
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1)
  }

  // Create an array of unique elements
  unique = Array.from(count.keys())

  // Helper function to swap two elements in the unique array
  function swap(a, b) {
    let tmp = unique[a]
    unique[a] = unique[b]
    unique[b] = tmp
  }

  // Partition function for Quickselect
  function partition(left, right, pivotIndex) {
    let pivotFrequency = count.get(unique[pivotIndex])

    // Move pivot to the end
    swap(pivotIndex, right)
    let storeIndex = left

    // Move all less frequent elements to the left
    for (let i = left; i <= right; i++) {
      if (count.get(unique[i]) < pivotFrequency) {
        swap(storeIndex, i)
        storeIndex++
      }
    }

    // Move the pivot to its final place
    swap(storeIndex, right)

    return storeIndex
  }

  // Quickselect function
  function quickselect(left, right, k) {
    if (left === right) return

    // Select a random pivot index
    let pivotIndex = left + Math.floor(Math.random() * (right - left))

    // Find the pivot position in the sorted list
    pivotIndex = partition(left, right, pivotIndex)

    // If the pivot is in its final sorted position
    if (k === pivotIndex) {
      return
    } else if (k < pivotIndex) {
      // Go left
      quickselect(left, pivotIndex - 1, k)
    } else {
      // Go right
      quickselect(pivotIndex + 1, right, k)
    }
  }

  // Find the (n - k)th smallest element in the frequency list
  let n = count.size
  quickselect(0, n - 1, n - k)

  // Return the top k frequent elements
  return unique.slice(n - k)
}
