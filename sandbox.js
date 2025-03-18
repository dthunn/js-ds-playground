const alienOrderBFS = function (words) {
  const adjList = new Map()
  const counts = new Map()

  for (const word of words) {
    for (const c of word) {
      counts.set(c, 0)
      adjList.set(c, [])
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i]
    let word2 = words[i + 1]
    if (word1.length > word2.length && word1.startsWith(word2)) return ''

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        adjList.get(word1[j]).push(word2[j])
        counts.set(word2[j], counts.get(word2[j]) + 1)
        break
      }
    }
  }

  const sb = []
  const queue = []

  for (const [c, count] of counts.entries()) {
    if (count === 0) queue.push(c)
  }

  while (queue.length) {
    const c = queue.shift()
    sb.push(c)

    for (const next of adjList.get(c)) {
      counts.set(next, counts.get(next) - 1)

      if (counts.get(next) === 0) queue.push(next)
    }
  }

  if (sb.length < counts.size) return ''
  return sb.join('')
}
