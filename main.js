const minCostClimbingStairs = (cost) => {
    // 1. init
    const n = cost.length
    cost = cost.concat([0])
    const MAX_VAL = 10000001
    const d = Array.from(new Array(n+1)).fill(MAX_VAL)

    // 2. top down
    d[0] = cost[0]
    d[1] = cost[1]

    const go = (i) => {
        if(d[i] < MAX_VAL) return d[i]

        if(i - 1 >= 0)
            d[i] = Math.min(d[i], go(i-1) + cost[i])
        if(i - 2 >= 0)
            d[i] = Math.min(d[i], go(i-2) + cost[i])

        return d[i]
    }

    return go(n)
};

cost = [10,15,20]
cost = [1,100,1,1,1,100,1,1,100,1]

const res = minCostClimbingStairs(cost)

console.log('res', res)