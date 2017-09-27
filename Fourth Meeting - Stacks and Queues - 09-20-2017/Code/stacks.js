//Code adapted from GA Sample
class Stack {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        return this.array.pop();
    }

	toString() {
		var reversed = this.array.slice().reverse();
		return reversed.toString();
	}

    peek() {
    	if(this.array.length === 0) {
    		return null
    	} else {
        	return this.array[this.array.length-1];
        }
    }
	print() {

	    var reversed = this.array.slice().reverse();
	    console.log("---Top---");
	    for (var item of reversed) {
	      console.log(item);
	    }
	    console.log("---Bottom---");
	}
}

var myStack = new Stack();

myStack.push("Plate");
myStack.push("Chocolate Chip Pancake");
myStack.push("Blueberry Pancake");
myStack.push("Butter");
myStack.push("Syrup");

myStack.print();