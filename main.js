const coinChange = (coins, amount) => {
    // 1. init
    const d = Array.from(new Array(amount+1).fill(amount+1))
    d[0] = 0

    // 2. bottom up
    for(let i=1; i<=amount; i++) {
        for(const c of coins) {
            if(i-c < 0) continue

            d[i] = Math.min(d[i], d[i-c] + 1)
        }
    }

    return d[amount] <= amount ? d[amount] : -1
};