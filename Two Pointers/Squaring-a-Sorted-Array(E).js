const make_squares = function (arr) {
  squares = []
  // TODO: Write your code here
  const n = arr.length
  squares = Array(n).fill(0)
  let biggestIdx = n - 1
  let right = n - 1
  let left = 0

  while (left < right) {
    let squareRightNum = arr[right] * arr[right]
    let squareLeftNum = arr[left] * arr[left]

    if (squareLeftNum > squareRightNum) {
      squares[biggestIdx] = squareLeftNum
      left += 1
    } else {
      squares[biggestIdx] = squareRightNum
      right -= 1
    }

    biggestIdx -= 1
  }

  return squares
}
