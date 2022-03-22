const frequencySort = (nums) => {
    // 1. init
    const m = new Map
    const res = []

    // 2. counter
    nums.forEach(x => {
        if(m.has(x)) m.set(x, m.get(x) + 1)
        else m.set(x, 1)
    })

    const sortedArr = [...m.entries()]
                .sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1])

    sortedArr.forEach(x => {
                    const [key, val] = x
                    for(let i=0; i<val; i++) res.push(key)
                })

    return res
};

const nums = [1,1,2,2,2,3]
const res = frequencySort(nums)
console.log('res', res)