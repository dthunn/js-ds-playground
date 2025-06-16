const subarraySum5 = function (nums, k) {
  const sumMap = new Map()
  sumMap.set(0, 1)
  let count = 0
  let runningSum = 0

  for (const num of nums) {
    runningSum += num

    if (sumMap.has(runningSum - k)) {
      count += sumMap.get(runningSum - k)
    }

    sumMap.set(runningSum, (sumMap.get(runningSum) || 0) + 1)
  }

  return count
}
