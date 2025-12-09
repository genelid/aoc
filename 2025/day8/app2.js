// Simple version
console.time()
const fs = require('fs')

const input = fs.readFileSync('input', 'utf-8')
let answer = 0

function dist(p1, p2) {
  const deltaX = p2.x - p1.x
  const deltaY = p2.y - p1.y
  const deltaZ = p2.z - p1.z
  return Math.hypot(deltaX, deltaY, deltaZ)
}

const boxes = input.trim().split(/\n/).map((line, i) => {
  const a = line.split(',').map(v => parseInt(v, 10))
  return { id: i, x: a[0], y: a[1], z: a[2] }
})

const dists = []
boxes.forEach((box, index) => {
  for (let i = index + 1; i < boxes.length; i++) {
    dists.push({ p1: box, p2: boxes[i], dist: dist(box, boxes[i]) })
  }
})
dists.sort((a, b) => a.dist - b.dist)

let circuitId = 0
const circuits = new Map()

for (let i = 0; i < dists.length; i++) {
  const { p1, p2 } = dists[i]
  if (!circuits.has(p1.id) && !circuits.has(p2.id)) {
    circuits.set(p1.id, circuitId)
    circuits.set(p2.id, circuitId)
    circuitId++
  }
  else if (!circuits.has(p1.id) && circuits.has(p2.id)) {
    circuits.set(p1.id, circuits.get(p2.id))
  }
  else if (circuits.has(p1.id) && !circuits.has(p2.id)) {
    circuits.set(p2.id, circuits.get(p1.id))
  }
  else if (circuits.has(p1.id) && circuits.has(p2.id)) {
    const id1 = circuits.get(p1.id)
    const id2 = circuits.get(p2.id)
    if (id1 !== id2) {
      circuits.forEach((v, k, m) => {
        if (v === id2) m.set(k, id1)
      })
    }
  }
  if (circuits.size === boxes.length && new Set(circuits.values()).size === 1) {
    answer = p1.x * p2.x
    break
  }
}

console.log('Answer:', answer)
console.timeEnd()
