function non_repeat_substring(str) {
	let charMap = {},
		windowStart = 0,
		maxLength = 0;


	// try to extend the range [windowStart, windowEnd]
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const character = str[windowEnd];
		// if the map already contains the 'rightChar', shrink the window from the beginning so that
		// we have only one occurrence of 'rightChar'
		if (character in charMap) {
			// this is tricky; in the current window, we will not have any 'rightChar' after its previous index
			// and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
			windowStart = Math.max(windowStart, charMap[character] + 1);
		}
		// insert the 'rightChar' into the map
		charMap[character] = windowEnd;
		// remember the maximum length so far
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
}
