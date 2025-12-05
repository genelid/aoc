// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')

const ranges = input.trim().split('\n\n')[0].split('\n').map(l => {
  const r = l.split('-').map(v => parseInt(v, 10))
  return [r[0], r[1]]
}).sort((a, b) => a[0] - b[0])

const merged = []

ranges.forEach(range => {
  if (merged.length === 0) merged.push(range)
  else {
    const last = merged[merged.length - 1]
    if (range[0] <= last[1]) {
      if (range[1] > last[1]) {
        last[1] = range[1]
        merged[merged.length - 1] = last
      }
    }
    else {
      merged.push(range)
    }
  }
})

let answer = merged.reduce((a, v) => a + 1 + (v[1] - v[0]), 0)

console.log('Answer:', answer)
console.timeEnd()
