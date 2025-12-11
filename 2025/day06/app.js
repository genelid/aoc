// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const lines = input.trim().split(/\n/).map((line, index, a) => {
  const cols = line.trim().split(/\s+/)
  return index === a.length - 1 ? cols : cols.map(v => parseInt(v, 10))
})

const symbols = lines[lines.length - 1]
for (let col = 0; col < lines[0].length; col++) {
  let a = lines[0][col]
  for (let row = 1; row < lines.length - 1; row++) {
    if (symbols[col] === '*') a *= lines[row][col]
    else a += lines[row][col]
  }
  answer += a
}

console.log('Answer:', answer)
console.timeEnd()
