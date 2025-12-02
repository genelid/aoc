// Simple version, second puzzle
const fs = require('fs')

let numZero = 0
let current = 50

const input = fs.readFileSync('input', 'utf-8')
input.split(/\n/).forEach(line =>  {
  if (line) {
    const num = parseInt(line.substr(1), 10)
    const s = line.charAt(0) === 'L' ? -num : +num
    const rs = s % 100
    const x = Math.abs((s - (s % 100)) / 100)
    if (current !== 0 && current + rs < 0 || current + rs > 100) numZero++
    current = ((current + rs) + 100) % 100
    numZero += x
    if (current === 0) numZero++ 
  }
})

console.log('Answer:', numZero)
