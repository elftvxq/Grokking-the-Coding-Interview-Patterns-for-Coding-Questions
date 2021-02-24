const fruits_into_baskets = function (fruits) {
  let windowStart = 0
  let frequency = {}
  let maxLength = 0

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const char = frequency[windowEnd]
    if (!(char in frequency)) {
      frequency[windowEnd] = 0
    }
    frequency[windowEnd] += 1

    while (Object.keys(frequency).length > 2) {
      const leftType = frequency[windowStart]
      frequency[leftType] -= 1

      if (frequency[leftType] === 0) {
        delete frequency[leftType]
      }
      windowStart += 1
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  // TODO: Write your code here
  return maxLength
}
