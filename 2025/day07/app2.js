// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const lines = input.trim().split(/\n/)
  .filter((line, i) => i % 2 === 0)
  .map(line => line.split(''))

const memo = new Map()
const count = (x, y, c) => {
  if (memo.has(x + ',' + y)) {
    return memo.get(x + ',' + y)
  }
  while (y < lines.length) {
    if (lines[y][x] === '^') {
      c = count(x - 1, y + 1, c) + count(x + 1, y + 1, c)
      memo.set(x + ',' + y, c)
      return c
    }
    y++
  }
  return c
}

answer = count(lines[0].indexOf('S'), 1, 1)

console.log('Answer:', answer)
console.timeEnd()
