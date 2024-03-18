const number = {
  1: 13,
  2: 56,
  3: 128,
  4: 204
}

// Упакуем 4 числа в 1 чсло Int32

const decoded = 13 << 24 | 56 << 16 | 128 << 8 | 204
console.log(decoded)

// Получим любое число из закодированного

function createMask(len, pos) {
  let r = ~0

  r <<= 32 - len
  r >>>= 32 - pos

  return r
}

const mask = createMask(8, 8)

console.log((decoded & mask) >>> 0);
