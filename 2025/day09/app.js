// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')

const tiles = input.trim().split(/\n/)
  .map(line => {
    const d = line.split(',').map(v => parseInt(v, 10))
    return { x: d[0], y: d[1] }
  })
  .sort((a, b) => (a.x - b.x) || (a.y - b.y))


let answer = 0

tiles.forEach((a, i) => {
  tiles.forEach((b, j) => {
    if (j > i) {
      const w = Math.abs(b.x - (a.x - 1))
      const h = Math.abs(b.y - (a.y - 1))
      const area = w * h
      if (area > answer) answer = area
    }
  })
})

console.log('Answer:', answer)
console.timeEnd()

