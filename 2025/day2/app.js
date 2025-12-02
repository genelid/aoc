// Simple version
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
const re1 = /^(\d+)(\1)$/  // Part one
const re2 = /^(\d+)(\1)+$/ // Part two
let answer = 0

input.trim().split(',').forEach(range =>  {
  let [from, to] = range.split('-').map(v => parseInt(v, 10))
  for (let i = from; i <= to; i++) {
    if (re1.test(i.toString())) answer += i
  }
})

console.log('Answer:', answer)
