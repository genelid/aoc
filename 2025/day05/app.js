// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const [ranges, ingredients] = 
  input.trim().split('\n\n').map((part, index) => {
    return index === 0 
      ? part.split('\n').map(l => {
        const r = l.split('-').map(v => parseInt(v, 10))
        return [r[0], r[1]]
      })
      : part.split('\n').map(v => parseInt(v,  10))
  })

ingredients.forEach(id => {
  for (let i = 0; i < ranges.length; i++) {
    if (id >= ranges[i][0] && id <= ranges[i][1]) {
      answer++
      break
    }
  }
})

console.log('Answer:', answer)
console.timeEnd()
