var findCheapestPrice = function (n, flights, src, dst, k) {
  let dist = new Array(n).fill(Infinity)
  dist[src] = 0

  for (let i = 0; i <= k; i++) {
    const temp = [...dist]

    for (const flight of flights) {
      if (dist[flight[0]] !== Infinity) {
        temp[flight[1]] = Math.min(temp[flight[1]], dist[flight[0]] + flight[2])
      }
    }

    dist = [...temp]
  }

  return dist[dst] === Infinity ? -1 : dist[dst]
}
