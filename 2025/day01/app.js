// Simple version
const fs = require('fs')

let numZero = 0
let current = 50

const input = fs.readFileSync('input', 'utf-8')
input.split(/\n/).forEach(line =>  {
  if (line) {
    const num = parseInt(line.substr(1), 10)
    const s = line.charAt(0) === 'L' ? -num : +num
    current = (((current + s) % 100) + 100) % 100
    if (current === 0) numZero++
  }
})

console.log('Answer:', numZero)
