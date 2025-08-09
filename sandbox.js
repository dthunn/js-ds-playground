const combinationSum = function (candidates, target) {
  const combinations = []

  const backtrack = function (remain, start, path) {
    if (remain < 0) return
    if (remain === 0) {
      combinations.push([...path])
      return
    }

    for (let i = start; i < candidations.length; i++) {
      path.push(candidates[i])
      backtrack(remain - candidates[i], i, path)
      path.pop()
    }
  }

  backtrack(target, 0, [])
  return combinations
}
