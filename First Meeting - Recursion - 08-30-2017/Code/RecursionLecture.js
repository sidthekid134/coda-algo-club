//Show all fib numbers until the n-th number
function dispFib(n) {
	let b = 0;
	let a = 1;
	let temp = null;
	while(n > 0) {
		console.log(b);
		temp = a;
		a = b+a;
		b = temp;
		n--;
	}
}

//Show all fib numbers using recursion
function fibRecursive(n) {
	if(n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibRecursive(n-1) + fibRecursive(n-2);
	}
}

function dispAllFibs(n) {
  let i = 0;
  while(i < n) {
   console.log(fibRecursive(i)); 
   i+=1;
  }
  
}

dispAllFibs(10);


//Show all fib numbers using recursion
function fibRecursive(n) {
	if(n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibRecursive(n-1) + fibRecursive(n-2);
	}
}

//Iterative fibonacci
function fibIter(n) {
	let a = 1;
	let b = 0;
	let temp = null;
	while (n > 0) {
		temp = a;
		a = b+a;
		b = temp;
		n--;
	}
	return b;
}

//Recursive fibonacci
function fibRecursive(n) {
	if(n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibRecursive(n-1) + fibRecursive(n-2);
	}
}

//Alternatively with a ternary operator, you could write...:
function fibRecursive2(n) {
	if (n < 2) ? 1: fibRecursive2(n-1) + fibRecursive2(n-2);
}

//Recursive Fibonacci with Tail Call Optimization
function fibRecursiveOptimized(n, a=1, b=0) {
	if(n===0) {
		return b;
	} else {
		return fibRecursiveOptimized(n-1, a+b, a);
	}
}


function countDown(num){
    if(num < 0){
        return;
    } else {
        console.log(num);
        num = num - 1;
        countDown(num);     
    }
}

countDown(5);
//This should print out 5, 4, 3, 2, 1, 0