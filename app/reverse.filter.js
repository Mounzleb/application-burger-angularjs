export function ReverseFilter () {
  return function (input, sep = '') {
     if (typeof input !== 'string') return

    return input
    // decoupe ma chaine de caractere en caracteres
      .split('')
      // inverse l'odre des caracteres
      .reverse()
      // joindre les caractere qui ont été séparé les uns des autres puis inversé
      .join('')
  }
}
