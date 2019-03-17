const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		if (maxSize == undefined) {
			this.maxSize = 30;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size() < this.maxSize ) {
			this.heap.push(data, priority);
		} else {
			throw new Error('passed node is not a child of this node');
		}
	}

	shift() {
		if (this.isEmpty()) {
			throw 'queue is empty';
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty()) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = PriorityQueue;
