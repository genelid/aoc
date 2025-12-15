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
const visited = []
const count = (key, c, p = []) => {
  if (visited.includes(key)) return 0
  p.push(key)
  const id = p.join('>')
  if (memo.has(id)) return memo.get(id)
  if (key === 'out') {
    const match = p.includes('dac') && p.includes('fft') ? 1 : 0
    // console.log(id + ': ' + match)
    // return p.includes('dac') && p.includes('fft') ? 1 : 0
    return match
  }
  const value = devices.get(key).reduce((a, cv) => a + count(cv, c, [...p]), 0)
  memo.set(id, value)
  p.pop()
  return value
}

let answer = count('svr', 0)

console.log('Answer:', answer)
console.timeEnd()

