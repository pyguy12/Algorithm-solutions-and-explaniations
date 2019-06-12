function binarySearch(array, target) {
	let rightPointer = array.length - 1;
	let leftPointer = 0;
	let middleIndex = Math.floor((rightPointer + leftPointer) / 2);
	
	while(leftPointer <= rightPointer) {
		if(array[middleIndex] == target) {
			return middleIndex;
		} else if(array[middleIndex] < target) {
			leftPointer = middleIndex + 1;
		} else if(array[middleIndex] > target) {
			rightPointer = middleIndex - 1;
		}
		middleIndex = Math.floor((rightPointer + leftPointer) / 2);
	}
	
	return -1;
}
