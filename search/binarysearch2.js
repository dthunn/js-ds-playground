function binarySearch(nums, target) {
  if (!nums || nums.length === 0) return -1

  let left = 0
  let right = nums.length - 1

  while (left < right) {
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

function upperBound(nums, target) {
  let left = 0,
    right = nums.length

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] <= target) {
      left = mid + 1 // move right if nums[mid] is not > target
    } else {
      right = mid // keep mid, it might be the upper bound
    }
  }

  return left // index of first element > target
}
