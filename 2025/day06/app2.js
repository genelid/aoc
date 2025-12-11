// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const lines = input.split(/\n/)
const symbols = input
  .match(/([\*\+]\s+)/g)

let x = 0
symbols.forEach((s, i) => {
  const l = s.length - 1
  const c = new Array(l).fill('')
  for (let j = 0; j < l; j++) {
    for (let k = 0; k < lines.length - 2; k++) {
      const v = lines[k].substring(x + j, x + j + 1).trim()
      c[j] += v 
    }
  }

  const multi = s.includes('*')
  const total = c.map(v => parseInt(v, 10)).reduce((a, cv) => {
    return multi ? a * cv : a + cv
  }, multi ? 1 : 0) 

  answer += total
  x += s.length
})

console.log('Answer:', answer)
console.timeEnd()
