// Simple version
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

input.trim().split(/\n/).forEach(line =>  {
  const nums = line.split('').map(v => parseInt(v, 10))
  const a = new Array(12).fill(1)
  const index = []
  for (let i = 0; i < 12; i++) {
    const li = i === 0 ? 0 : index[index.length - 1]
    const si = i === 0 ? 0 : li + 1
    for (let j = si; j <= line.length - (12 - i); j++) {
      if (nums[j] > a[i]) {
        a[i] = nums[j]
        index[i] = j
      }
    }
  }
  const v = parseInt(a.join(''), 10)
  answer += v
})

console.log('Answer:', answer)
