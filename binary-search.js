/* Write a function that takes in a sorted array of integers as well as a Target integer. 
The function should use the binary search algorithm to find if the target number is contained in the 
array and should return its index if it is, otherwise return -1. */

function binarySearch(array, target) {
  // I define the right pointer value which is used to keep track of the end of our current subarray.
	let rightPointer = array.length - 1;
  
  // The left pointer is used to keep track of the beginning f our subarray.
	let leftPointer = 0;
  
  /* The middle index is initialized with this algorithm. We're basically just finding the middle of our subarray by taking
  the average of our left and right pointers. */ 
	let middleIndex = Math.floor((rightPointer + leftPointer) / 2);
	
  /* The condition for this while loop catches cases in which our number actually isn't in our array. Since we change the values
  of our left and right pointers in the logic below to be equal to the middle index + or - 1, we'll eventually have our left pointer
  be greater than our right pointer if we never hit the return statement in our while loop. */
	while(leftPointer <= rightPointer) {
  
    /* We're checking if the current value at our middleIndex is equal to our target value. If it is, we've found the target and we can
    return the middleIndex. */
		if(array[middleIndex] == target) {
			return middleIndex;
		}
    
    /* If it isn't we'll check if the middleIndex value is less than the target value. Since we know the array is already sorted, if the
    value is middleIndex value is less than the target, we can assume the middleIndex and any value to the left of it in the array will
    not equal the target value. Changing the left pointer value in this manner lets us conditionally ignore half of the list each time
    we loop through it. */
    else if(array[middleIndex] < target) {
			leftPointer = middleIndex + 1;
		}
    
    /* Next, we'll check if the middleIndex value is greater than the target value. If it is, we can apply the same logic as before
    and change our right pointer value. */
    else if(array[middleIndex] > target) {
			rightPointer = middleIndex - 1;
		}
    
    /* Here, we recalculate the middle index with our newly edited right and left pointer values. */
		middleIndex = Math.floor((rightPointer + leftPointer) / 2);
	}
	
  /* Finally, if we we didn't hit the return value in our while loop, we know that we eventually broke out of it and ended up here.
  Since we're here, we can assume we weren't able to find our target number in the array, so we return -1. */
	return -1;
}
