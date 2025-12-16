// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input-test', 'utf-8')

const tiles = input.trim().split(/\n/)
  .map(line => {
    const d = line.split(',').map(v => parseInt(v, 10))
    return { x: d[0], y: d[1] }
  })
  .sort((a, b) => a.y - b.y)

console.log(tiles)

let answer = 0

tiles.forEach((a, i) => {
  // console.log(i)
  tiles.forEach((b, j) => {
    if (j > i) {
      const w = Math.abs(b.x - (a.x - 1))
      const h = Math.abs(b.y - (a.y - 1))
      const area = w * h
      if (area > answer) answer = area
      // console.log('j:', j, 'w:', w, 'h:', h, 'area:', area)
    }
  })
})

console.log('Answer:', answer)
console.timeEnd()

