const find_string_anagrams = function (str, pattern) {
	let result_indexes = [];
	let matchCount = 0
	let windowStart = 0
	let frequencyMap = {}

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i]
		if (!(char in frequencyMap)) {
			frequencyMap[char] = 0
		}
		frequencyMap[char] += 1
	}

	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd]

		if (rightChar in frequencyMap) {
			frequencyMap[rightChar] -= 1

			if (frequencyMap[rightChar] === 0) {
				matchCount++
			}
		}

		if (matchCount === Object.keys(frequencyMap).length) {
			result_indexes.push(windowStart);
		}

		if (windowEnd >= pattern.length - 1) {
			const leftChar = str[windowStart]
			windowStart++

			if (leftChar in frequencyMap) {
				if (frequencyMap[leftChar] === 0) {
					matchCount--
				}
				frequencyMap[leftChar] += 1
			}
		}

	}


	return result_indexes;
};
