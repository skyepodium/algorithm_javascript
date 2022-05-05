
const MyStack = function() {
    this.q = []
}


MyStack.prototype.push = function(x) {
    this.q.push(x)
    const n = this.q.length
    for(let i=0; i<n-1; i++) {
        this.q.push(this.q.shift())
    }
}

MyStack.prototype.pop = function() {
    return this.q.shift()
}

MyStack.prototype.top = function() {
    return this.q[0]
}

MyStack.prototype.empty = function() {
    return this.q.length === 0
}
