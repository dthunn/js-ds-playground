function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const foundVal = array[mid]

    if (foundVal === target) {
      return mid
    } else if (target < foundVal) {
      right = mid - 1
    } else if (target > foundVal) {
      left = mid + 1
    }
  }

  return -1
}
