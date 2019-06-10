function getNthFib(n) {
  /* Defining the lastTwo array to hold the last two numbers of the fibonacci
	sequence which we'll calculate later.*/
	let lastTwo = [0, 1];
	let counter = 3;
	
	/* The while condition catches edge cases like n = 1 and n = 2 where we
	where we already have the values of the fibonacci numbers in the lastTwo
	array. That means this loop will only run when asked to calculate the
	fibonacci numbers of 3 or higher, where actual calculations need to
	be done*/
	
	while(counter <= n) {
		/* nextNum is equal to the next number in the fibonacci sequence. With our
		solution, lastTwo[0] and lastTwo[1] are actually f(n - 1) + f(n - 2). Adding
		those together gets us our next fibonacci number, f(n).*/
		let nextNum = lastTwo[0] + lastTwo[1];
		
		/* Here, we're throwing the first value in the lastTwo array away since
		we don't need it anymore to calculate the next fibonacci number.*/
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nextNum;
		
		// We have to increment counter to eventually break out of the loop.
		counter++;
	}
	
	/* This is to check for the edge case of the first fibonacci number. In this
	case, we'd return the first element of the lastTwo array since the first
	fibonacci number is 0.*/
	if(n == 1) {
		return lastTwo[0];
	} else {
		// We're returning lastTwo[1] because it's the nth fibonacci number.
		return lastTwo[1];
	}
}
