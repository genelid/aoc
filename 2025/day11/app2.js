// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')

const devices = new Map(input.trim().split(/\n/)
  .map(line => {
    const d = line.split(/:?[ ]/)
    return [d[0], d.slice(1)]
  }))

const count = (src, dst, memo = new Map()) => {
  if (src === dst) return 1
  if (memo.has(src)) return memo.get(src)
  if (!devices.has(src)) return 0
  const value = devices.get(src).reduce((a, cv) => a + count(cv, dst, memo), 0)
  memo.set(src, value)
  return value
}

let answer = [
  { src: 'svr', dst: 'fft' },
  { src: 'fft', dst: 'dac' },
  { src: 'dac', dst: 'out' },
].reduce((a, cv) => a * count(cv.src, cv.dst),  1)

console.log('Answer:', answer)
console.timeEnd()

