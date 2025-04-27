class TrieNode {
  constructor() {
    this.characters = {}
    this.wordEnd = false
  }
}

class Trie {
  constructor() {
    this.trieNode = new TrieNode()
  }

  insert(word) {
    let trieLevel = this.trieNode

    for (const c of word) {
      if (!trieLevel.characters[c]) trieLevel.characters[c] = new TrieNode()

      trieLevel = trieLevel.characters[c]
    }

    trieLevel.wordEnd = true
  }

  search(word) {
    let trieLevel = this.trieNode

    for (const c of word) {
      if (!trieLevel.characters[c]) return false

      trieLevel = trieLevel.characters[c]
    }

    return trieLevel.wordEnd
  }
}
