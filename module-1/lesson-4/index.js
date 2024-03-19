function binary(num) {
  const str = new Uint32Array([num])[0].toString(2);
  return '0b' + str.padStart(32, '0').replace(/(.{4})(?!$)/g, '$1_');
}

function parseBinary(str) {
  return parseInt(str.replace(/^0b|_/g, ''), 2) >> 0;
}

console.log(parseBinary(binary(0b0010 << 1)))

function circularLeftShift(num, shift) {
  return num << shift | num >>> (32 - shift);
}

function circularRightShift(num, shift) {
  return num >>> shift | num << (32 - shift);
}

function getDoubleStr2(num) {
  const data = new DataView(new ArrayBuffer(8));
  data.setFloat64(0, num, false);

  let bits = '';

  for (let i = 0; i < 8; i++) {
    const byte = data.getUint8(i).toString(2).padStart(8, '0');
    bits += byte;
  }

  return '0b' + bits.replace(/(.{4})(?!$)/g, '$1_');
}

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
