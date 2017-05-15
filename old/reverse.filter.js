export function ReverseFilter () {
  return function (input, sep = '') {
    if (typeof input !== 'string') return

    return input
      .split('')
      .reverse()
      .join(sep)
  }
}
