function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const table = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    table[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < t.length; i++) {
    const index = t.charCodeAt(i) - 'a'.charCodeAt(0)
    table[index]--
    if (table[index] < 0) {
      return false
    }
  }

  return true
}
