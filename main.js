class MyStack {
    constructor() {
        this.q = []
    }

    push(x) {
        this.q.push(x)
        const n = this.q.length
        for(let i=0; i<n-1; i++) this.q.push(this.q.shift())
    }

    pop() {
        return this.q.shift()
    }

    top() {
        return this.q[0]
    }

    empty() {
        return this.q.length === 0
    }
}