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

const map = new Map()
tiles.forEach(t => {
  map.set(t.x + '.' + t.y, true)
})

let answer = 0

tiles.forEach((a, i) => {
  console.log(i)
  tiles.forEach((b, j) => {
    if (j > i) {
      const w = Math.abs(b.x - (a.x - 1))
      const h = Math.abs(b.y - (a.y - 1))
      const area = w * h
      const aa = a.x < b.x ? a.x + w : a.x - w
      const bb = a.y < b.y ? a.y + h : a.y - h
      // TODO: Check if aa and bb is inside
      console.log('j:', j, 'w:', w, 'h:', h, 'area:', area)
      if (area > answer) answer = area
    }
  })
})

console.log('Answer:', answer)
console.timeEnd()


