var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1]

  const m = nums1.length,
    n = nums2.length
  let left = 0,
    right = m

  while (left <= right) {
    const pA = Math.floor((left + right) / 2)
    const pB = Math.floor((m + n + 1) / 2 - pA)

    const maxLeftA = pA === 0 ? -Infinity : nums1[pA - 1]
    const minRightA = pA === m ? Infinity : nums1[pA]
    const maxLeftB = pB === 0 ? -Infinity : nums2[pB - 1]
    const minRightB = pB === n ? Infinity : nums2[pB]

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        )
      } else {
        return Math.max(maxLeftA, maxLeftB)
      }
    } else if (maxLeftA > minRightB) {
      right = pA - 1
    } else {
      left = pA + 1
    }
  }

  return -1
}
