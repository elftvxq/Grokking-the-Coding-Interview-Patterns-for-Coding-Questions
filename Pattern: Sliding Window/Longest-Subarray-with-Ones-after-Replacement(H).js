const length_of_longest_substring = function (arr, k) {
	let maxOneCount = 0
	let windowStart = 0
	let maxLength = 0

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

		if (arr[windowEnd] === 1) {
			maxOneCount += 1
		}

		if ((windowEnd - windowStart + 1 - maxOneCount) > k) {
			if (arr[windowStart] === 1) {
				maxOneCount -= 1
			}
			windowStart++
		}
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
	}
	return maxLength;
};
