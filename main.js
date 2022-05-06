const maxOperations = (nums, k) => {
    // 1. init
    let res = 0
    const m = new Map()
    nums.forEach(num => {
        m.has(num) ? m.set(num, m.get(num) + 1) : m.set(num, 1)
    })

    // 2. loop
    for(const num of nums) {
        const remain = k - num

        if(!m.has(remain)) continue
        if(num === remain && m.get(remain) <= 1) continue
        if(m.get(remain) < 1 || m.get(num) < 1) continue

        res++
        m.set(remain, m.get(remain) - 1)
        m.set(num, m.get(num) - 1)
    }

    return res
};