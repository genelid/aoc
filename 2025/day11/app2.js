// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input-test', 'utf-8')

const devices = new Map(input.trim().split(/\n/)
  .map(line => {
    const d = line.split(/:?[ ]/)
    return [d[0], d.slice(1)]
  }))

/*
 * Idea: the input somehow to remove data
 */


const count = (key) => {
  let result = 0
  const path = new Map()
  const stack = [key]

  while (stack.length > 0) {
    const current = stack.pop()
    // console.log(current)
    if (current === 'out') {
      let target = current
      let p = []
      while (target !== undefined) {
        p.push(target)
        target = path.get(target)
      }
      console.log('------')
      console.log(path)
      console.log(p.reverse().join(','))
      console.log('------')
      if (p.includes('dac') && p.includes('fft')) result++
    }
    else {
      devices.get(current).forEach(item => {
        stack.push(item)
        path.set(item, current)
      })
    }
  }

  return result
}

let answer = count('svr')

console.log('Answer:', answer)
console.timeEnd()

