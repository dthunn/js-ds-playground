function binarySearch(nums, target) {
  if (!nums || nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2) // prevent overflow
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid
    } else {
      right = mid
    }
  }

  // Post-processing: check the remaining two elements
  if (nums[left] === target) return left
  if (nums[right] === target) return right

  return -1
}
