// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input-test', 'utf-8')
let answer = 0

const devices = new Map(input.trim().split(/\n/)
  .map(line => {
    const d = line.split(/:?[ ]/)
    return [d[0], d.slice(1)]
  }))

// console.log(devices)

const memo = new Map()
const count = (key, p = []) => {
  if (memo.has(key)) return memo.get(key)
  if (key === 'out') return [...p, key]
  // const value = [
  //   devices.get(key).map(item => count(item, [...p, key]))
  // ]
  const item = devices.get(key)[0]
  const value = count(item, [...p, key])
  memo.set(key, value)
  return value
}

answer = count('svr')
answer.forEach(item => console.log(item + "\n"))
console.log(memo)
// console.log('Answer:', answer)
console.timeEnd()

