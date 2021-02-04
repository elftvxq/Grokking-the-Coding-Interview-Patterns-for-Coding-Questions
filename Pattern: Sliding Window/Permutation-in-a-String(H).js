const find_permutation = function (str, pattern) {
	let windowStart = 0
	let matchCount = 0
	let frequencyMap = {}

	for (let i = 0; i < pattern.lenght; i++) {
		const char = pattern[i]
		if (!(char in frequencyMap)) {
			frequencyMap[char] = 0
		}
		frequencyMap[char] += 1
	}

	for (let windowEnd = 0; windowEnd < str.lenght; windowEnd++) {
		const rightChar = str[windowEnd]
		if (rightChar in frequencyMap) {
			frequencyMap[rightChar] -= 1

			if (frequencyMap[rightChar] === 0) {
				matchCount += 1
			}
		}


		if (matchCount === Object.keys(frequencyMap).length) {
			return true
		}

		if (windowEnd >= pattern.lenght - 1) {
			const leftChar = str[windowStart]
			windowStart += 1

			if (leftChar in frequencyMap) {
				if (frequencyMap[leftChar] === 0) {
					matchCount -= 1
				}
				frequencyMap[leftChar] += 1
			}
		}
	}

	return false;
};
