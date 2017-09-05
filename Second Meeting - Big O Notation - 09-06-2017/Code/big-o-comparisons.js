//Runtime Complexity Examples -- 3 separate ones to illustrate diff between space/time complexity


//Runtime: O(1), Space: O(1)
function sample1(input) {
	return 5;
}
sample1([1,2,3,4,5]);

//Runtime: O(n), Space: O(1)
function sample2(input) {
	let sum = 0;
	for(let i = 0, x = input.length; i < x; i++) {
		sum+= input[i];
	}
	return sum;
}
sample2([1,2,3,4,5]);

//Runtime: O(n^2), Space: O(1)
function sample3(input) {
	let sum = 0;
	for(let i = 0, x = input.length; i < x; i++) {
		for(let j = 0; j < x; j++) {
			sum+=input[i];
		}
	}
	return sum;
}
sample3([1,2,3,4,5]);

//Runtime: O(n), Space: O(n)
function sample4(input) {
	let arr = [];
	let sum = 0;
	for(let i = 0, x = input.length; i < x; i++) {
		arr.push(input[i]);
	}
	for(let j = 0, x = arr.length; j < x; j++) {
		sum+=arr[j];
	}
	return sum;
}
sample4([1,2,3,4,5]);

//Recursive stack takes up SPACE
//Runtime: O(1), Space: O(n) without tail-end optimization, O(1) with tail-end optimization. WHY.
function sample5(input, sum) {
	if(input.length === 0) {
		return sum;
	}
	return sample5(input, sum+=input.pop());
}
sample5([1,2,3,4,5], 0);

//Basic Search on Sorted List
function basicSearch(numbers, target) {
	//Input is a SORTED list of numbers
	//If target is in "numbers", return its index. Else, return -1.

	for(let i = 0, x = numbers.length; i < x; i++) {
		if (numbers[i] === target) {
			return i;
		}
	}
	return -1;
}

//Helper function to get me an array of numbers from 0 to 100 (inclusive).
function generateArray(upperEnd) {
	arr = [];
	for(let i = 0; i <= upperEnd; i++) {
		arr.push(i);
	}
	return arr;
}
let testArr = generateArray(100);

basicSearch(testArr, 88);

//The above is O(n).

//How can we improve it? Rely on the fact that it is a SORTED list.

function binarySearch(numbers, target) {
	var min = 0;
	var max = numbers.length - 1;
	var index;
	var elem;

	while(min <= max) {
		index = Math.floor((min+max)/2);
		elem = numbers[index];

		if(elem === target) {
			return index;
		} else if (elem < target) {
			min = index+1;
		} else {
			max = index-1;
		}
	}

	return -1;
}

binarySearch(testArr, 88);



//Find duplicate in an array of strings
function findDuplicate(arr) {
	for(let i = 0, x = arr.length; i < x; i++) {
		let temp = arr[i];
		for(let j = i+1; j < x; j++) {
			if(arr[j] === temp) {
				return temp;
			}
		}
	}
	return -1;
}

//Find duplicate in an array of strings in linear time instead of n^2. Use an object to do this. 
function findDuplicateFaster(arr) {
	var alreadySeen = {};
	for(let i = 0, x = arr.length; i < x; i++) {
		if(alreadySeen[arr[i]]) {
			return arr[i];
		}
		alreadySeen[arr[i]] = true;
	}
	return -1;
}





