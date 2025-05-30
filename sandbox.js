var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0)
  const adjList = inDegree.map(() => [])

  for (const [course, prereq] of prerequisites) {
    inDegree[course]++
    adjList[prereq].push(course)
  }

  const stack = []
  let count = 0

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) stack.push(i)
  }

  while (stack.length) {
    const current = stack.pop()
    count++

    for (const next of adjList[current]) {
      inDegree[next]--
      if (inDegree[next] === 0) stack.push(next)
    }
  }

  return count === numCourses
}
