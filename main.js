const openLock = (deadends, target) => {
    // 1. getNextNode
    const getNextNode = (node, index, direction) => {
        let nextBit = 0
        // up
        if(direction === 0) {
            nextBit = (Number(node[index]) + 1) % 10
        }
        // down
        if(direction === 1) {
            nextBit = (Number(node[index]) - 1 + 10) % 10
        }

        return node.slice(0, index) + nextBit + node.slice(index + 1)
    }

    // 2. BFS
    const bfs = (startNode, endNode, deadends) => {
        // 1) init
        let q1 = new Set()
        let q2 = new Set()
        const visited = new Set()
        q1.add(startNode)
        q2.add(endNode)
        deadends.forEach(deadend => visited.add(deadend))

        // 2) loop
        let step = 0
        while (q1.size > 0 && q2.size > 0) {
            if(q1.size > q2.size) {
                [q1, q2] = [q2, q1]
            }
            const temp = new Set()

            for(const node of q1) {
                if(visited.has(node)) continue
                if(q2.has(node)) return step
                visited.add(node)

                for(let i=0; i<4; i++){
                    for(let j=0; j<2; j++) {
                        const nextNode = getNextNode(node, i, j)
                        if(visited.has(nextNode)) continue
                        temp.add(nextNode)
                    }
                }
            }
            q1 = q2
            q2 = temp
            step++
        }
        return -1
    }

    return bfs('0000', target, deadends)
};

deadends = ["0201","0101","0102","1212","2002"]
target = "0202"

deadends = ["8888"]
target = "0009"

deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"]
target = "8888"

console.log(openLock(deadends, target))