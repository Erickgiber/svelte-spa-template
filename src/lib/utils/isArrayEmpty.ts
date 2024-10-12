export const isArrayEmpty = (array: any[]): boolean => {
  if (!Array.isArray(array)) {
    console.error('isArrayEmpty: argument is not an array')
    return false
  }

  return array.length === 0
}
