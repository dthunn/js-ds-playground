function binarySearch(nums, target) {
  if (!nums || nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // Prevent (left + right) overflow
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  // Post-processing: left == right
  return nums[left] === target ? left : -1
}
