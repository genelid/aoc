// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input-test', 'utf-8')
let answer = 0

const lines = input.trim().split(/\n/).map((line, index, a) => {
  const cols = line.trim().split(/\s+/)
  return index === a.length - 1 ? cols : cols.map(v => parseInt(v, 10))
})

console.log(lines)

// const symbols = lines[lines.length - 1]
// for (let col = 0; col < lines[0].length; col++) {
//   let a = lines[0][col]
//   let str = ''
//   for (let row = 1; row < lines.length - 1; row++) {
//     str += lines[row][col]
//     str += symbols[col]
//     if (symbols[col] === '*') a *= lines[row][col]
//     else a += lines[row][col]
//   }
//   console.log(str, '=', a)
//   answer += a
// }

console.log('Answer:', answer)
console.timeEnd()
