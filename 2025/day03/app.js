// Simple version
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

input.trim().split(/\n/).forEach(line =>  {
  const nums = line.split('').map(v => parseInt(v, 10))
  const a = [1, 1]
  let index = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > a[0]) {
      a[0] = nums[i]
      index = i
    }
  }
  for (let i = nums.length - 1; i > index; i--) {
    if (nums[i] > a[1]) {
      a[1] = nums[i]
    }
  }
  const v = parseInt(a.join(''), 10)
  answer += v
  console.log(line, " : ", v)
})

console.log('Answer:', answer)
