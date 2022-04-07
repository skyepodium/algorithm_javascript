const lastStoneWeight = (stones) => {
    // 1. loop
    while(stones.length >= 2) {
        stones.sort((a, b) => b-a)

        const a = stones.shift()
        const b = stones.shift()

        stones.push(a===b ? 0 : Math.abs(a-b))
    }

    return stones[0]
};
stones = [2,7,4,1,8,1]
const res = lastStoneWeight(stones)

console.log('res', res)