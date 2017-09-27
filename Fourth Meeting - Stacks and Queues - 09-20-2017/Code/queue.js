//Code adapted from GA Sample
class Queue {

    constructor() {
        this.array = [];
    }

    enqueue(item) {
    	this.array.push(item);
    }

    peek() {
    	if(this.array.isEmpty()) {
    		return null
    	}
    	return this.array[0];
    }

	isEmpty() {
		return this.array.length === 0;
	}

    dequeue() {

		if (this.isEmpty()) {
		  return null;
		}

		return this.array.shift();

    }

	toString() {
		var string = "[ " + this.array.toString() + " ]";
		return string;
	}

	print() {
		console.log(this.toString());
	}

}

var groceryList = new Queue();

groceryList.enqueue("Chocolate");
groceryList.enqueue("More Chocolate");
groceryList.enqueue("Chicken");
groceryList.enqueue("Bread");

groceryList.print();

var foodItem = groceryList.dequeue();
console.log("First thing I am going to buy is " + foodItem);

if (foodItem === "Chocolate") {
  console.log("CORRECT");
}
else {
  console.log("INCORRECT");
}

//Print to ensure the head element was removed
groceryList.print();