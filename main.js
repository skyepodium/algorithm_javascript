const minCostClimbingStairs = (cost) => {
    // 1. init
    const n = cost.length
    cost = cost.concat([0])
    const MAX_VAL = 10000001
    const d = Array.from(new Array(n+1)).fill(MAX_VAL)

    // 2. bottom up
    d[0] = cost[0]
    d[1] = cost[1]

    for(let i=0; i<n; i++) {
        if(i + 1 <= n)
            d[i+1] = Math.min(d[i+1], d[i] + cost[i+1])
        if(i + 2 <= n)
            d[i+2] = Math.min(d[i+2], d[i] + cost[i+2])
    }

    return d[n]
};

cost = [10,15,20]
cost = [1,100,1,1,1,100,1,1,100,1]

const res = minCostClimbingStairs(cost)

console.log('res', res)