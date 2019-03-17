class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
	if (this.left != null && this.right != null) {
			return;
		} else if (this.left != null) {
			this.right = node;
		} else {
			this.left = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.right === node) {
			this.right = null;
			node.parent = null;
		} else if (this.left === node) {
			this.left = null;
			node.parent = null;
		} else {
			throw new Error('passed node is not a child of this node')
		}
	}

	remove() {
		if (this.parent === null) {
			return;
		}
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent === null) {
			return;
		}
		let temp = this.parent;
		this.parent = this.parent.parent;
		temp.parent = this;
		
		
		if (this === temp.right) {
			temp.left.parent = this;
			this.left = temp.left;
			temp.right = this.right;
			this.right = temp;
			this.parent = null;
		} else if (this === temp.left) {
			this.right = temp.right;
			temp.left = this.left;
			this.left = temp;
			temp.right = null;
		}
	}
}

module.exports = Node;
