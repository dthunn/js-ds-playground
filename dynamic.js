const combinationSumList = function (target, candidates, memo = new Map()) {
  if (memo.has(target)) return memo.get(target)
  if (target === 0) return []
  if (target < 0) return null

  for (const num of candidates) {
    const remainder = target - num
    const result = combinationSum(remainder, candidates, memo)

    if (result !== null) {
      memo.set(target, [...result, num])
      return [...result, num]
    }
  }

  memo.set(target, null)
  return null
}

// const combinationSumTF = function (target, candidates, memo = new Map()) {
//   if (memo.has(target)) return memo.get(target)
//   if (target === 0) return true
//   if (target < 0) return false

//   for (let num of candidates) {
//     const remainder = target - num

//     if (combinationSumTF(remainder, candidates, memo)) {
//       memo.set(target, true)
//       return true
//     }
//   }
//   memo.set(target, false)
//   return false
// }

// console.log(combinationSum(7, [2, 3]))
// console.log(combinationSum(7, [5, 3, 4, 7]))
// console.log(combinationSum(7, [2, 4]))
// console.log(combinationSum(8, [2, 3, 5]))
// console.log(combinationSum(300, [7, 14]))

const bestSum = (targetSum, numbers, memo = new Map()) => {
  if (memo.has(targetSum)) return memo.get(targetSum)
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (const num of numbers) {
    const remainder = targetSum - num
    const result = bestSum(remainder, numbers, memo)

    if (result !== null) {
      const combination = [...result, num]

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      )
        shortestCombination = combination
    }
  }

  memo.set(targetSum, shortestCombination)
  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(7, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))
