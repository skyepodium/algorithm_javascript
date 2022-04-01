class Node {
    constructor(val, minVal) {
        this.val = val
        this.next = null
        this.minVal = minVal
    }
}

const MinStack = function() {
    this.head = null
};

MinStack.prototype.push = function(val) {
    const minVal = this.head ? Math.min(val, this.head.minVal) : val
    const node = new Node(val, minVal)
    node.next = this.head
    this.head = node
};


MinStack.prototype.pop = function() {
    this.head = this.head.next
};


MinStack.prototype.top = function() {
    return this.head.val
};


MinStack.prototype.getMin = function() {
    return this.head.minVal
};
