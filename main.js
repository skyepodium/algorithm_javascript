const smallerNumbersThanCurrent = (nums) => {
    // 1. init
    const maxInt = 101
    const c = Array.from(new Array(maxInt).fill(0))
    const d = Array.from(new Array(maxInt).fill(0))

    // 2. loop
    nums.forEach(num => c[num]++)

    let prev = 0
    for(let i=0; i<maxInt; i++) {
        if(c[i] === 0) continue

        d[i] = prev
        prev += c[i]
    }

    return nums.map(num => d[num])
};