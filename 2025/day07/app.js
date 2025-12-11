// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

const print = lines => {
  const str = lines.map(line => line.join('')).join("\n")
  console.log(str)
}

const lines = input.trim().split(/\n/).map(line => line.split(''))

const place = (x, y) => {
  if (lines[y][x] === '^') {
    lines[y][x - 1] = lines[y][x + 1] = '|'
    answer++
  }
  else {
    lines[y][x] = '|'
  }
}

lines.forEach((line, y) => {
  if (y < lines.length - 1) {
    for (let x = 0; x < line.length; x++) {
      if (line[x] === 'S' || line[x] === '|') {
        place(x, y + 1)
      }
    }
  }
})

print(lines)

console.log('Answer:', answer)
console.timeEnd()
