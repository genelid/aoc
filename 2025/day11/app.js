// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')

const devices = new Map(input.trim().split(/\n/)
  .map(line => {
    const d = line.split(/:?[ ]/)
    return [d[0], d.slice(1)]
  }))

const memo = new Map()
const count = (key, c) => {
  if (key === 'out') return 1
  if (memo.has(key)) return memo.get(key)
  const value = devices.get(key).reduce((a, cv) => a + count(cv, c), 0)
  memo.set(key, value)
  return value
}

let answer = count('you', 0)

console.log('Answer:', answer)
console.timeEnd()

