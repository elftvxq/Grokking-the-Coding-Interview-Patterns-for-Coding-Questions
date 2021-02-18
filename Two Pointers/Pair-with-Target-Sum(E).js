const pair_with_targetsum = function (arr, target_sum) {
	let right = arr.length - 1
	let left = 0

	while (left < right) {
		const sum = arr[left] + arr[right]

		if (sum === target_sum) {
			return [left, right]
		}

		if (sum > target_sum) {
			right -= 1
		} else {
			left += 1
		}
	}

	return [-1, -1];
}
