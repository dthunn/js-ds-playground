function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // let mid = left + Math.floor((right - left) / 2);
    const midValue = array[mid]

    if (target === midValue) {
      return mid
    } else if (midValue < target) {
      left = mid + 1
    } else if (midValue > target) {
      right = mid - 1
    }
  }

  return -1
}
