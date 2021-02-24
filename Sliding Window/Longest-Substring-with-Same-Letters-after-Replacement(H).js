const length_of_longest_substring = function (str, k) {
	// TODO: Write your code here
	let windowStart = 0
	let charFrequentHash = {}
	let maxRepeatCount = 0
	let maxLength = 0

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const char = str[windowEnd]
		if (!(char in charFrequentHash)) {
			charFrequentHash[char] = 0
		}
		charFrequentHash[char] += 1

		maxRepeatCount = Math.max(maxRepeatCount, charFrequentHash[char])

		if ((windowEnd - windowStart + 1 - maxRepeatCount) > k) {
			let leftChat = str[windowStart]
			charFrequentHash[leftChat] -= 1
			windowStart++
		}
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
	}
	return maxLength;
};
