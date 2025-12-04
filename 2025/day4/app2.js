// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const grid = input.trim().split(/\n/).map(line => line.split(''))

const removeRolls = () => {
  let numRemoved = 0
  const removed = []
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '@') {
        let count = 0
        for (let cy = y - 1; cy <= y + 1; cy++) {
          for (let cx = x - 1; cx <= x + 1; cx++) {
            if (cy === y && cx === x) continue
            if (grid?.[cy]?.[cx] === '@') {
              count++
            }
          }
          if (count >= 4) break
        }
        if (count < 4) removed.push({ x, y })
      }
    }
  }
  removed.forEach(roll => grid[roll.y][roll.x] = '.')
  return removed.length
}

while (numRemoved = removeRolls()) {
  answer += numRemoved
}

console.log('Answer:', answer)
console.timeEnd()
